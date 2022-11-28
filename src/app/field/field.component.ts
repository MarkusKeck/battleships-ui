import { Component, OnInit } from '@angular/core';
import {Coordinates} from "../../entity/coordinates";
import {GameConfig} from "../../GameConfig";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  coordinates : Coordinates[] = []

  constructor() { }

  ngOnInit(): void {
    this.populateField();
  }


  populateField() {
    for(let y = 1; y <= GameConfig.HEIGHT; y++) {
      for(let x = 1; x <= GameConfig.WIDTH; x++) {
        this.coordinates.push(new Coordinates(x, y));
      }
    }
  }

}
