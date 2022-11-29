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

  placedShips = new Map<ShipType, number>()

  constructor(
    public gameService: GameService,
    public shipPlacementService: ShipPlacementService,
    public gameConfigService: GameConfigService) {
  }

  ngOnInit(): void {
    this.placedShips.set(ShipType.SUBMARINE, 0);
    this.placedShips.set(ShipType.DESTROYER, 0);
    this.placedShips.set(ShipType.BATTLESHIP, 0);
    this.placedShips.set(ShipType.AIRCRAFT_CARRIER, 0);
  }

  setOrientation(o: Orientation): void {
    this.shipPlacementService.orientation = o
  }

  setShipType(s: ShipType): void {
    this.shipPlacementService.shipType = s
  }

}
