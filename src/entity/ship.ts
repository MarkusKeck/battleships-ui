import {Orientation} from "./orientation";
import {ShipType} from "./shipType";
import {Coordinates} from "./coordinates";

export class Ship {

  id?: number

  orientation?: Orientation

  shipType?: ShipType

  coordinates?: Coordinates

  isDestroyed?: boolean

}
