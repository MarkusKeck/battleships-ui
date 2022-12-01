import {Component} from '@angular/core';
import {Difficulty} from "../../enumeration/difficulty";
import {GameService} from "../../services/game/game.service";

@Component({
  selector: 'app-select-difficulty',
  templateUrl: './select-difficulty.component.html',
  styleUrls: ['./select-difficulty.component.css']
})
export class SelectDifficultyComponent {

  difficulty: typeof Difficulty = Difficulty

  constructor(public gameService: GameService) {}

}
