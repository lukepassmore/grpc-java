import {Component, Input} from '@angular/core';
import {IECsv} from '../protos/csv';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  @Input()
  earthquake!: IECsv;

}
