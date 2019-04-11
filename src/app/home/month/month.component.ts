import { Component, Input } from '@angular/core';
import { dateSuffix } from 'src/app/utils/util';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent {
  @Input() month;
  title = 'month';
  today = new Date();

  dateSuffix(date) {
    return dateSuffix(date);
  }
}
