import {Injectable} from '@angular/core';
import {Game} from "../../entity/game";
import {Coordinates} from "../../entity/coordinates";
import {Ship} from "../../entity/ship";
import {ShipPlacementService} from "../ship-placement/ship-placement.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private shipPlacementService: ShipPlacementService) { }

  game: Game = new Game()

  coordinatesClicked(coordinates: Coordinates): void {
    if (this.game.state == 2) {
      this.placeShip(coordinates)
    } else {
      // fire
    }
  }

  placeShip(coordinates: Coordinates): void {
    let ship = new Ship(this.shipPlacementService.orientation, this.shipPlacementService.shipType, coordinates)
    this.game.fieldPlayerOne.ships.push(ship)
  }

}
