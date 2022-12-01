import {Component, Input} from '@angular/core';
import {Coordinates} from "../../entity/coordinates";
import {Field} from "../../entity/field";
import {GameService} from "../../services/game/game.service";
import {Player} from "../../enumeration/player";

@Component({
  selector: 'app-coordinate-field',
  templateUrl: './coordinate-field.component.html',
  styleUrls: ['./coordinate-field.component.css']
})
export class CoordinateFieldComponent {

  @Input() coordinates!: Coordinates
  @Input() player!: Player

  constructor(private gameService: GameService) {

  }

  placeShip(): void {
    this.gameService.coordinatesClicked(this.coordinates)
  }


  getField(): Field {
    return this.player === Player.PLAYER_ONE ? this.gameService.game.fieldPlayerOne : this.gameService.game.fieldPlayerTwo
  }


  isOccupied() : boolean {
    if (this.player === Player.PLAYER_ONE) {
      return this.gameService.isShipPlacedOnCoordinates(this.getField(), this.coordinates)
    }
    return false;
  }

  getContent(): string {
    for (let i = 0; i < this.gameService.game.turns.length; i++) {
      let opposingPlayer = this.player === Player.PLAYER_ONE ? Player.PLAYER_TWO : Player.PLAYER_ONE
      if (this.gameService.game.turns[i].player === opposingPlayer) {
        if (
          this.gameService.game.turns[i].coordinates.x === this.coordinates.x &&
          this.gameService.game.turns[i].coordinates.y === this.coordinates.y
        ) {
          // get Ship by coords and field
          return this.gameService.game.turns[i].hit ? 'shotAtAndHit' : 'shotAt'
        }
      }
    }
    return 'notShotAt'
  }

}
