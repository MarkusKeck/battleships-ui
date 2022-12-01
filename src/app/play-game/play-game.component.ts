import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game/game.service";
import {Player} from "../../enumeration/player";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  constructor(public gameService: GameService) {}

  player: typeof Player = Player

  ngOnInit(): void {
  }

}
