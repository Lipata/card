import { Component, OnInit } from '@angular/core';
import { Toast, Employee } from '../model/interfaces';
import { toasts } from '../data/toast';
import { employees } from '../data/employees';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    public employees: Employee[];
    public toasts: Toast[];
    public sponsors: Employee[];

    public ngOnInit() {
        this.toasts = toasts;
        this.employees = employees;
        this.sponsors = [
            { id: 9, name: 'Glenn Hughes', birthday: new Date(1985, 8, 9), imgUrl: 'https://randomuser.me/api/portraits/men/19.jpg' },
            { id: 10, name: 'Emeli Sande', birthday: new Date(1985, 8, 9), imgUrl: 'https://randomuser.me/api/portraits/women/25.jpg' }]
    }

    public pay(event) {
        this.sponsors.pop();
        this.employees.push(this.sponsors[1]);
    }
}
