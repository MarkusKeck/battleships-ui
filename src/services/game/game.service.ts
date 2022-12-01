import {Injectable} from '@angular/core';
import {Game} from "../../entity/game";
import {Coordinates} from "../../entity/coordinates";
import {Ship} from "../../entity/ship";
import {ShipPlacementService} from "../ship-placement/ship-placement.service";
import {ShipType} from "../../enumeration/shipType";
import {Orientation} from "../../enumeration/orientation";
import {Field} from "../../entity/field";
import {BattleshipApiService} from "../api/battleship-api.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private shipPlacementService: ShipPlacementService, private battleshipApiService: BattleshipApiService) {}

  game: Game = new Game()

  coordinatesClicked(coordinates: Coordinates): void {
    if (this.game.state == 2) {
      this.placeShip(coordinates)
    } else {
      this.shoot(coordinates)
    }
  }

  placeShip(coordinates: Coordinates): void {
    // check in future if this is a valid spot
    let ship = new Ship(this.shipPlacementService.orientation, this.shipPlacementService.shipType, coordinates)
    this.game.fieldPlayerOne.ships.push(ship)
  }

  getAmountOfPlacedShipsForShipType(shipType: string): number {
    let amount = 0
    for (let i = 0; i < this.game.fieldPlayerOne.ships.length; i++) {
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

      let shipLength;
      switch (ship.shipType) {
        case ShipType.SUBMARINE.name:
          shipLength = ShipType.SUBMARINE.length
          break;
        case ShipType.DESTROYER.name:
          shipLength = ShipType.DESTROYER.length
          break;
        case ShipType.BATTLESHIP.name:
          shipLength = ShipType.BATTLESHIP.length
          break;
        default:
          shipLength = ShipType.AIRCRAFT_CARRIER.length
          break;
      }

      for (let length = 0; length < shipLength; length++) {
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

  start(): void {
    this.battleshipApiService.startGameWithDifficulty(this.game.difficulty!).subscribe(Response => {
      this.game = Response
      this.game.state = 2
    })
  }

  placeShips(): void {
    this.battleshipApiService.placeShips(this.game).subscribe(Response => {
      this.game = Response
      this.game.state = 3
    })
  }

  shoot(coordinates: Coordinates): void {
    this.battleshipApiService.shoot(this.game, coordinates).subscribe(Response => {
      this.game = Response
      this.game.state = 3
    })
  }

}
