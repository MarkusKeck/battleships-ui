import {ShipType} from "./entity/shipType";

export class GameConfig {

  public static readonly WIDTH:  number = 10;
  public static readonly HEIGHT: number = 10;

  public static readonly SHIPS = new Map<ShipType, number>();

  static {
    GameConfig.SHIPS.set(ShipType.SUBMARINE, 4);
    GameConfig.SHIPS.set(ShipType.DESTROYER, 3);
    GameConfig.SHIPS.set(ShipType.BATTLESHIP, 2);
    GameConfig.SHIPS.set(ShipType.AIRCRAFT_CARRIER, 1);
  }

}
