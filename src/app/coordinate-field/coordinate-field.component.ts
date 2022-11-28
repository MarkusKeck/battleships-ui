import {Component, Input, OnInit} from '@angular/core';
import {Coordinate} from "../../entity/coordinate";

@Component({
  selector: 'app-coordinate-field',
  templateUrl: './coordinate-field.component.html',
  styleUrls: ['./coordinate-field.component.css']
})
export class CoordinateFieldComponent implements OnInit {

  @Input() coordinate!: Coordinate

  disabled: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  placeShip(): void {
    alert("x: " + this.coordinate.x + " y: " + this.coordinate.y);
    this.disabled = true;
  }

}
