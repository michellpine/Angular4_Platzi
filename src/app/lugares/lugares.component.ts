import { Component } from '@angular/core';
import { LugaresServices } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'PlatziSquare';
  lat = 4.6560663;
  lng = -74.0595918;
  lugares = null;
  constructor(private lugaresServices: LugaresServices) {
    this.lugares = lugaresServices.getLugares();
  }
}
