import {Player} from "../enumeration/player";
import {Coordinates} from "./coordinates";

export class Turn {

  id?: number
  turn?: number

  player?: Player
  coordinates: Coordinates = new Coordinates(0, 0)

  hit?: boolean
}
