import { Component, OnInit } from '@angular/core';
import { Recepie } from '../../model/recepie';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recepies: Recepie[];
  new_recepie_in_progress: Recepie;
  isDarkbg: boolean;
  fontSize: string;

  constructor() {
    this.isDarkbg = true;
    this.new_recepie_in_progress = Recepie.createBlankRecepie();
    this.fontSize = '150%';
    this.recepies = [
      new Recepie(
        "Banana Bread",
        "This is my favorite banana bread recepie! My mother taught me how to make this one so warm..",
        10,
        20,
        null,
        null,
        null
      ),
      new Recepie(
        "Tofu",
        "This is my favorite banana bread recepie! My mother taught me how to make this one so warm..",
        20,
        100,
        null,
        null,
        null
      ),
      new Recepie(
        "American Bread",
        "This is my favorite banana bread recepie! My mother taught me how to make this one so warm..",
        5,
        22,
        null,
        null,
        null
      ),
      new Recepie(
        "Orange Jelly",
        "This is my favorite banana bread recepie! My mother taught me how to make this one so warm..",
        12,
        200,
        null,
        null,
        null
      ),
    ];
  }

  ngOnInit() {
  }

  public saveRecepie() {
    console.log(JSON.stringify(this.new_recepie_in_progress, null, 2));
    this.recepies.unshift(this.new_recepie_in_progress);
    this.new_recepie_in_progress = Recepie.createBlankRecepie();
  }

  public zoomInOnRecepie(recepie) {
    console.log(JSON.stringify(recepie, null, 2));
  }

  public toggleBackground() {
    this.isDarkbg = !this.isDarkbg;
  }

  public toggleFontsize() {
    this.fontSize = (this.fontSize === '150%') ? '170%' : '150%';
  }

}
