import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecepieListComponent } from './component/recepie-list/recepie-list.component';
import { RecepieSummaryComponent } from './component/recepie-summary/recepie-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    RecepieListComponent,
    RecepieSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'recepies',
        component: RecepieListComponent
      },
      {
        path: '',
        redirectTo: '/recepies',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
