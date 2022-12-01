import {Player} from "../enumeration/player";
import {Difficulty} from "../enumeration/difficulty";
import {Turn} from "./turn";
import {Field} from "./field";

export class Game {

  id?: number

  state: number = 1

  fieldPlayerOne: Field = new Field()
  fieldPlayerTwo: Field = new Field()

  turns: Turn[] = []

  difficulty?: Difficulty = Difficulty.MEDIUM

  winner?: Player

}
