import {Injectable} from '@angular/core';
import {Game} from "../../entity/game";
import {Coordinates} from "../../entity/coordinates";
import {Ship} from "../../entity/ship";
import {ShipPlacementService} from "../ship-placement/ship-placement.service";
import {ShipType} from "../../enumeration/shipType";
import {Orientation} from "../../enumeration/orientation";
import {Field} from "../../entity/field";

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
    // check in future if this is a valid spot
    let ship = new Ship(this.shipPlacementService.orientation, this.shipPlacementService.shipType, coordinates)
    this.game.fieldPlayerOne.ships.push(ship)
  }

  getAmountOfPlacedShipsForShipType(shipType: ShipType): number {
    let amount = 0
    for(let i = 0; i < this.game.fieldPlayerOne.ships.length; i++) {
      if (this.game.fieldPlayerOne.ships[i].shipType === shipType) {
        amount++
      }
    }
    return amount
  }

  getAllShipCoordinatesFromField(field: Field): Coordinates[] {
    let allShipCoordinates: Coordinates[] = []
    field.ships.forEach((ship) => {
      let x: number = ship.coordinates.x!
      let y: number = ship.coordinates.y!

      for (let length = 0; length < ship.shipType; length++) {
        if (ship.orientation === Orientation.HORIZONTAL) {
          allShipCoordinates.push(new Coordinates(x + length, y))
        } else {
          allShipCoordinates.push(new Coordinates(x, y + length))
        }
      }
    })
    return allShipCoordinates;
  }

  isShipPlacedOnCoordinates(field: Field, coordinates: Coordinates): boolean {
    for(let i = 0; i < this.getAllShipCoordinatesFromField(field).length; i++) {
      if (
        this.getAllShipCoordinatesFromField(field)[i].x === coordinates.x &&
        this.getAllShipCoordinatesFromField(field)[i].y === coordinates.y
      ) {
        return true
      }
    }
    return false
  }

}
