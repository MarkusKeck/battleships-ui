import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { CoordinateFieldComponent } from './coordinate-field/coordinate-field.component';
import { ShipPlacementComponent } from './ship-placement/ship-placement.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    CoordinateFieldComponent,
    ShipPlacementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
