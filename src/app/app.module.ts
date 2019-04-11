import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MonthComponent } from './home/month/month.component';
import { IgxListModule, IgxAvatarModule, IgxExpansionPanelModule,
  IgxIconModule, IgxInputGroupModule, IgxFilterModule, IgxCardModule, IgxButtonModule,
  IgxDialogModule, IgxBannerModule, IgxBottomNavModule } from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MonthComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxAvatarModule,
    IgxBannerModule,
    IgxBottomNavModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxFilterModule,
    IgxExpansionPanelModule,
    IgxCardModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
