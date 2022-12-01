import {Component, OnInit} from '@angular/core';
import {ShipType} from "../../enumeration/shipType";
import {Orientation} from "../../enumeration/orientation";
import {GameService} from "../../services/game/game.service";
import {ShipPlacementService} from "../../services/ship-placement/ship-placement.service";
import {GameConfigService} from "../../services/game-config/game-config.service";
import {BattleshipApiService} from "../../services/api/battleship-api.service";
import {Player} from "../../enumeration/player";

@Component({
  selector: 'app-ship-placement',
  templateUrl: './ship-placement.component.html',
  styleUrls: ['./ship-placement.component.css']
})
export class ShipPlacementComponent implements OnInit {

  orientation: typeof Orientation = Orientation
  shipType: typeof ShipType = ShipType
  player: typeof Player = Player

  constructor(
    public gameService: GameService,
    public shipPlacementService: ShipPlacementService,
    public gameConfigService: GameConfigService,
    public battleshipApiService: BattleshipApiService) {
  }

  ngOnInit(): void {
  }

  setOrientation(o: Orientation): void {
    this.shipPlacementService.orientation = o
  }

  setShipType(s: string): void {
    this.shipPlacementService.shipType = s
  }

  areCorrectAmountsOfShipsPlaced(): boolean {
    let AMOUNT_SUBMARINE: number        = this.gameConfigService.SHIPS.get(ShipType.SUBMARINE.name)!
    let AMOUNT_DESTROYER: number        = this.gameConfigService.SHIPS.get(ShipType.DESTROYER.name)!
    let AMOUNT_BATTLESHIP: number       = this.gameConfigService.SHIPS.get(ShipType.BATTLESHIP.name)!
    let AMOUNT_AIRCRAFT_CARRIER: number = this.gameConfigService.SHIPS.get(ShipType.AIRCRAFT_CARRIER.name)!

    let FIELD_SUBMARINE_COUNT: number         = this.gameService.getAmountOfPlacedShipsForShipType(ShipType.SUBMARINE.name)
    let FIELD_DESTROYER_COUNT: number         = this.gameService.getAmountOfPlacedShipsForShipType(ShipType.DESTROYER.name)
    let FIELD_BATTLESHIP_COUNT: number        = this.gameService.getAmountOfPlacedShipsForShipType(ShipType.BATTLESHIP.name)
    let FIELD_AIRCRAFT_CARRIER_COUNT: number  = this.gameService.getAmountOfPlacedShipsForShipType(ShipType.AIRCRAFT_CARRIER.name)

    return (
      FIELD_SUBMARINE_COUNT == AMOUNT_SUBMARINE &&
      FIELD_DESTROYER_COUNT == AMOUNT_DESTROYER &&
      FIELD_BATTLESHIP_COUNT == AMOUNT_BATTLESHIP &&
      FIELD_AIRCRAFT_CARRIER_COUNT == AMOUNT_AIRCRAFT_CARRIER
    );
  }

  next(): void {
    this.gameService.placeShips();
  }


}
