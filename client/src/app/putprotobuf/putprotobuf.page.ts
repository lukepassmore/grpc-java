import {Component, OnInit} from '@angular/core';
import {IECsv} from '../protos/csv';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-putprotobuf',
  templateUrl: './putprotobuf.page.html',
  styleUrls: ['./putprotobuf.page.scss']
})
export class PutprotobufPage implements OnInit {

  records = {}

  constructor(private readonly ApiService: ApiService) {
  }

  doRefresh(event: Event): void {
    this.ApiService.refresh().subscribe(() => {
      this.ApiService
        .putProtobuf()
        .subscribe(data => {
          this.records = data;
          (event as CustomEvent).detail.complete();
        });
    });
  }

  ngOnInit(): void {
    this.ApiService.putProtobuf().subscribe(data => this.records = data);
  }

}
