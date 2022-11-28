import {Player} from "../enumeration/player";
import {Difficulty} from "../enumeration/difficulty";
import {Turn} from "./turn";
import {Field} from "./field";

export class Coordinate {

  id?: number

  fieldPlayerOne?: Field
  fieldPlayerTwo?: Field

  turns?: Turn[] = []

  difficulty?: Difficulty

  winner?: Player

}
