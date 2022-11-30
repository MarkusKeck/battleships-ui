import {Orientation} from "../enumeration/orientation";
import {ShipType} from "../enumeration/shipType";
import {Coordinates} from "./coordinates";

export class Ship {

  id?: number

  orientation: Orientation

  shipType: ShipType

  coordinates: Coordinates

  isDestroyed: boolean = false

  constructor(orientation: Orientation, shipType: ShipType, coordinates: Coordinates) {
    this.orientation = orientation;
    this.shipType = shipType;
    this.coordinates = coordinates;
  }

}
