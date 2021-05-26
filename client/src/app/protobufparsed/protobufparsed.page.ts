import {Component, OnInit} from '@angular/core';
import {IECsv} from '../protos/csv';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-protobufparsed',
  templateUrl: './protobufparsed.page.html',
  styleUrls: ['./protobufparsed.page.scss']
})
export class ProtobufparsedPage implements OnInit {

  records: IECsv[] = [];

  constructor(private readonly ApiService: ApiService) {
  }

  doRefresh(event: Event): void {
    this.ApiService.refresh().subscribe(() => {
      this.ApiService
        .fetchProtobufParsed()
        .subscribe(data => {
          this.records = data;
          (event as CustomEvent).detail.complete();
        });
    });
  }

  ngOnInit(): void {
    this.ApiService.fetchProtobufParsed().subscribe(data => this.records = data);
  }

}
