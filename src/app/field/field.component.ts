import {Component, Input, OnInit} from '@angular/core';
import {Coordinates} from "../../entity/coordinates";
import {Field} from "../../entity/field";
import {GameConfigService} from "../../services/game-config/game-config.service";
import {Orientation} from "../../enumeration/orientation";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  coordinates: Coordinates[] = []


  constructor(private gameConfigService: GameConfigService) {}

  @Input() field!: Field

  ngOnInit(): void {
    this.populateWater()
  }

  getAllShipCoordinates(): Coordinates[] {
    let allShipCoordinates: Coordinates[] = []
    this.field.ships.forEach((ship) => {
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

  populateWater() : void {
    for(let y = 1; y <= this.gameConfigService.HEIGHT; y++) {
      for(let x = 1; x <= this.gameConfigService.WIDTH; x++) {
        this.coordinates.push(new Coordinates(x, y))
      }
    }
  }

  isCoordinateOccupied(coordinates: Coordinates): boolean {
    for(let i = 0; i < this.getAllShipCoordinates().length; i++) {
      if (
        this.getAllShipCoordinates()[i].x === coordinates.x &&
        this.getAllShipCoordinates()[i].y === coordinates.y
      ) {
        console.log("TRUE")
        return true

      }
    }
    return false
  }

}
