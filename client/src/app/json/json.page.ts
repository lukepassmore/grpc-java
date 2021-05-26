import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {IECsv} from '../protos/csv';

@Component({
  selector: 'app-json',
  templateUrl: './json.page.html',
  styleUrls: ['./json.page.scss']
})
export class JsonPage implements OnInit {

  earthquakes: IECsv[] = [];

  constructor(private readonly ApiService: ApiService) {
  }

  doRefresh(event: Event): void {
    this.ApiService.refresh().subscribe(() => {
      this.ApiService
        .fetchJson()
        .subscribe(data => {
          console.log(data);
          (event as CustomEvent).detail.complete();
          
        });
    });
  }

  ngOnInit(): void {
    this.ApiService.fetchJson().subscribe(data => this.earthquakes = data);
  }
  
}
