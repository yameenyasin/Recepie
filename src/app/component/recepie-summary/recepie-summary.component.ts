import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Recepie } from '../../model/recepie';
import { EventEmitter } from '@angular/forms/src/facade/async';

@Component({
  selector: 'app-recepie-summary',
  templateUrl: './recepie-summary.component.html',
  styleUrls: ['./recepie-summary.component.css']
})
export class RecepieSummaryComponent{

  @Input()
  recepie: Recepie;

  @Output()
  zoomIn: EventEmitter<Recepie> = new EventEmitter();
  constructor() { }

  public zoomClicked() {
    this.zoomIn.emit(this.recepie);
  }

}
