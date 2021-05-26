import {Component, OnInit} from '@angular/core';
import {IECsv} from '../protos/csv';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-protobuf',
  templateUrl: './protobuf.page.html',
  styleUrls: ['./protobuf.page.scss']
})
export class ProtobufPage implements OnInit {

  records: IECsv[] = [];

  constructor(private readonly ApiService: ApiService) {
  }

  doRefresh(event: Event): void {
    this.ApiService.refresh().subscribe(() => {
      this.ApiService
        .fetchProtobuf()
        .subscribe(data => {
          this.records = data;
          (event as CustomEvent).detail.complete();
        });
    });
  }

  ngOnInit(): void {
    this.ApiService.fetchProtobuf().subscribe(data => alert(data));
  }

}