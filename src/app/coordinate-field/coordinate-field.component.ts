import {Component, Input, OnInit} from '@angular/core';
import {Coordinates} from "../../entity/coordinates";

@Component({
  selector: 'app-coordinate-field',
  templateUrl: './coordinate-field.component.html',
  styleUrls: ['./coordinate-field.component.css']
})
export class CoordinateFieldComponent implements OnInit {

  @Input() coordinates!: Coordinates

  disabled: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  placeShip(): void {
    alert("x: " + this.coordinates.x + " y: " + this.coordinates.y);
    this.disabled = true;
  }

}
