import {Component, OnInit} from '@angular/core';
import {IECsv} from '../protos/csv';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-patchprotobuf',
  templateUrl: './patchprotobuf.page.html',
  styleUrls: ['./patchprotobuf.page.scss']
})
export class PatchprotobufPage implements OnInit {

  records = {}

  constructor(private readonly ApiService: ApiService) {
  }

  doRefresh(event: Event): void {
    this.ApiService.refresh().subscribe(() => {
      this.ApiService
        .patchProtobuf()
        .subscribe(data => {
          this.records = data;
          (event as CustomEvent).detail.complete();
        });
    });
  }

  ngOnInit(): void {
    this.ApiService.patchProtobuf().subscribe(data => this.records = data);
  }

}
