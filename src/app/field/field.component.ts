import {Component, Input, OnInit} from '@angular/core';
import {Coordinates} from "../../entity/coordinates";
import {Field} from "../../entity/field";
import {GameConfigService} from "../../services/game-config/game-config.service";
import {Player} from "../../enumeration/player";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  coordinates: Coordinates[] = []

  constructor(private gameConfigService: GameConfigService) {}

  @Input() field!: Field
  @Input() player!: Player

  ngOnInit(): void {
    this.populateWater()
  }

  populateWater(): void {
    for(let y = 1; y <= this.gameConfigService.HEIGHT; y++) {
      for(let x = 1; x <= this.gameConfigService.WIDTH; x++) {
        this.coordinates.push(new Coordinates(x, y))
      }
    }
  }

}
