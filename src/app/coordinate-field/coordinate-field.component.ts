import {Component, Input} from '@angular/core';
import {Coordinates} from "../../entity/coordinates";
import {Field} from "../../entity/field";
import {GameService} from "../../services/game/game.service";

@Component({
  selector: 'app-coordinate-field',
  templateUrl: './coordinate-field.component.html',
  styleUrls: ['./coordinate-field.component.css']
})
export class CoordinateFieldComponent {

  @Input() coordinates!: Coordinates
  @Input() field!: Field
  @Input() occupied!: boolean

  disabled: boolean = false

  constructor(private gameService: GameService) { }

  placeShip(): void {
    this.gameService.coordinatesClicked(this.coordinates)
    this.disabled = true
  }

}
