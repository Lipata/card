import { Component, ViewChildren, QueryList, ViewChild, OnInit } from '@angular/core';
import { IgxExpansionPanelComponent, IgxBannerComponent } from 'igniteui-angular';
import { months, birthdays } from '../data/months';
import { employees } from '../data/employees';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChildren(IgxExpansionPanelComponent)
    public accordion: QueryList<IgxExpansionPanelComponent>;

    @ViewChild(IgxBannerComponent) public banner: IgxBannerComponent;

    public months = months;
    public employees = employees;
    public birthdays = birthdays.reverse();
    public today = new Date();

    public onInteraction(event) {
        const expandedPanels = this.accordion.filter((panel) => !panel.collapsed);
        expandedPanels.forEach((expandedPanel) => {
            if (expandedPanel.id !==  event.panel.id) {
                expandedPanel.collapse();
            }
        });
    }

    public ngOnInit() {
        // this.banner.open();
    }
}
