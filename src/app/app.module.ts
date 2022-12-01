import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { CoordinateFieldComponent } from './coordinate-field/coordinate-field.component';
import { ShipPlacementComponent } from './ship-placement/ship-placement.component';
import { GameComponent } from './game/game.component';
import { SelectDifficultyComponent } from './select-difficulty/select-difficulty.component';
import {FormsModule} from "@angular/forms";
import { PlayGameComponent } from './play-game/play-game.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    CoordinateFieldComponent,
    ShipPlacementComponent,
    GameComponent,
    SelectDifficultyComponent,
    PlayGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
