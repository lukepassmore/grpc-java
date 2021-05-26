import {Component, OnInit} from '@angular/core';
import {IECsv} from '../protos/csv';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-postprotobuf',
  templateUrl: './postprotobuf.page.html',
  styleUrls: ['./postprotobuf.page.scss']
})
export class PostprotobufPage implements OnInit {

  records = {}

  constructor(private readonly ApiService: ApiService) {
  }

  doRefresh(event: Event): void {
    this.ApiService.refresh().subscribe(() => {
      this.ApiService
        .postProtobuf()
        .subscribe(data => {
          this.records = data;
          (event as CustomEvent).detail.complete();
        });
    });
  }

  ngOnInit(): void {
    this.ApiService.postProtobuf().subscribe(data => this.records = data);
  }

}
