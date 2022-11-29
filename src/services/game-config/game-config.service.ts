import { Injectable } from '@angular/core';
import {ShipType} from "../../enumeration/shipType";

@Injectable({
  providedIn: 'root'
})
export class GameConfigService {

  public readonly WIDTH:  number = 10
  public readonly HEIGHT: number = 10

  public readonly SHIPS = new Map<ShipType, number>()

  constructor() {
    this.SHIPS.set(ShipType.SUBMARINE, 4)
    this.SHIPS.set(ShipType.DESTROYER, 3)
    this.SHIPS.set(ShipType.BATTLESHIP, 2)
    this.SHIPS.set(ShipType.AIRCRAFT_CARRIER, 1)
  }

}
