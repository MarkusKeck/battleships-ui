import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../entity/game";
import {GameService} from "../../services/game/game.service";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
  }

}
