import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../entity/game";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  constructor() {}

  @Input() game!: Game

  ngOnInit(): void {
  }

}
