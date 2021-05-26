import {Component, OnInit} from '@angular/core';
import {IECsv} from '../protos/csv';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-deleteprotobuf',
  templateUrl: './deleteprotobuf.page.html',
  styleUrls: ['./deleteprotobuf.page.scss']
})
export class DeleteprotobufPage implements OnInit {

  records = {}

  constructor(private readonly ApiService: ApiService) {
  }

  doRefresh(event: Event): void {
    this.ApiService.refresh().subscribe(() => {
      this.ApiService
        .deleteProtobuf()
        .subscribe(data => {
          this.records = data;
          (event as CustomEvent).detail.complete();
        });
    });
  }

  ngOnInit(): void {
    this.ApiService.deleteProtobuf().subscribe(data => this.records = data);
  }

}
