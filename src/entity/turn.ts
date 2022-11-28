import {Player} from "../enumeration/player";
import {Coordinates} from "./coordinates";

export class Turn {

  id?: number
  turn?: number

  player?: Player
  coordinates?: Coordinates

  hit?: boolean
}
