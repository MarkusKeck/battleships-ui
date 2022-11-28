import {Player} from "./player";
import {Difficulty} from "./difficulty";
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
