import { Injectable } from '@angular/core';
import {ShipType} from "../../enumeration/shipType";

@Injectable({
  providedIn: 'root'
})
export class GameConfigService {

  public readonly WIDTH:  number = 10
  public readonly HEIGHT: number = 10

  public readonly SHIPS = new Map<string, number>()

  constructor() {
    this.SHIPS.set(ShipType.SUBMARINE.name, 4)
    this.SHIPS.set(ShipType.DESTROYER.name, 3)
    this.SHIPS.set(ShipType.BATTLESHIP.name, 2)
    this.SHIPS.set(ShipType.AIRCRAFT_CARRIER.name, 1)
  }

}
