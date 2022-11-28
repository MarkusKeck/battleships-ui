import { Component, OnInit } from '@angular/core';
import {GameConfig} from "../../GameConfig";
import {ShipType} from "../../enumeration/shipType";
import {Orientation} from "../../enumeration/orientation";

@Component({
  selector: 'app-ship-placement',
  templateUrl: './ship-placement.component.html',
  styleUrls: ['./ship-placement.component.css']
})
export class ShipPlacementComponent implements OnInit {

  orientation: typeof Orientation = Orientation
  shipType: typeof ShipType = ShipType

  requiredShips = GameConfig.SHIPS
  placedShips = new Map<ShipType, number>()

  selectedOrientation = Orientation.HORIZONTAL;
  selectedShipType = ShipType.SUBMARINE;

  constructor() { }

  ngOnInit(): void {
    this.placedShips.set(ShipType.SUBMARINE, 0);
    this.placedShips.set(ShipType.DESTROYER, 0);
    this.placedShips.set(ShipType.BATTLESHIP, 0);
    this.placedShips.set(ShipType.AIRCRAFT_CARRIER, 0);
  }

  selectOrientation(o: Orientation): void {
    this.selectedOrientation = o;
  }

  selectShipType(type: ShipType): void {
    this.selectedShipType = type;
  }

}
