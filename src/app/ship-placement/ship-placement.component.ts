import {Component, OnInit} from '@angular/core';
import {ShipType} from "../../enumeration/shipType";
import {Orientation} from "../../enumeration/orientation";
import {GameService} from "../../services/game/game.service";
import {ShipPlacementService} from "../../services/ship-placement/ship-placement.service";
import {GameConfigService} from "../../services/game-config/game-config.service";

@Component({
  selector: 'app-ship-placement',
  templateUrl: './ship-placement.component.html',
  styleUrls: ['./ship-placement.component.css']
})
export class ShipPlacementComponent implements OnInit {

  orientation: typeof Orientation = Orientation
  shipType: typeof ShipType = ShipType

  constructor(
    public gameService: GameService,
    public shipPlacementService: ShipPlacementService,
    public gameConfigService: GameConfigService) {
  }

  ngOnInit(): void {
  }

  setOrientation(o: Orientation): void {
    this.shipPlacementService.orientation = o
  }

  setShipType(s: ShipType): void {
    this.shipPlacementService.shipType = s
  }

  areCorrectAmountsOfShipsPlaced(): boolean {
    let AMOUNT_SUBMARINE: number        = this.gameConfigService.SHIPS.get(ShipType.SUBMARINE)!
    let AMOUNT_DESTROYER: number        = this.gameConfigService.SHIPS.get(ShipType.DESTROYER)!
    let AMOUNT_BATTLESHIP: number       = this.gameConfigService.SHIPS.get(ShipType.BATTLESHIP)!
    let AMOUNT_AIRCRAFT_CARRIER: number = this.gameConfigService.SHIPS.get(ShipType.AIRCRAFT_CARRIER)!

    let FIELD_SUBMARINE_COUNT: number         = this.gameService.getAmountOfPlacedShipsForShipType(ShipType.SUBMARINE)
    let FIELD_DESTROYER_COUNT: number         = this.gameService.getAmountOfPlacedShipsForShipType(ShipType.DESTROYER)
    let FIELD_BATTLESHIP_COUNT: number        = this.gameService.getAmountOfPlacedShipsForShipType(ShipType.BATTLESHIP)
    let FIELD_AIRCRAFT_CARRIER_COUNT: number  = this.gameService.getAmountOfPlacedShipsForShipType(ShipType.AIRCRAFT_CARRIER)

    return (
      FIELD_SUBMARINE_COUNT == AMOUNT_SUBMARINE &&
      FIELD_DESTROYER_COUNT == AMOUNT_DESTROYER &&
      FIELD_BATTLESHIP_COUNT == AMOUNT_BATTLESHIP &&
      FIELD_AIRCRAFT_CARRIER_COUNT == AMOUNT_AIRCRAFT_CARRIER
    );
  }

  next(): void {
    this.gameService.game.state = 3
  }


}
