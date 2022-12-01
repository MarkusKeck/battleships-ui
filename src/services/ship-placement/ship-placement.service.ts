import {Injectable} from '@angular/core';
import {Orientation} from "../../enumeration/orientation";
import {ShipType} from "../../enumeration/shipType";

@Injectable({
  providedIn: 'root'
})
export class ShipPlacementService {

  orientation: Orientation = Orientation.HORIZONTAL
  shipType: string = ShipType.SUBMARINE.name

  constructor() {}

}
