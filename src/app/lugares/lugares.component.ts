import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { mergeNsAndName } from '@angular/compiler';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'PlatziSquare';
  lat = 4.6560663;
  lng = -74.0595918;
  lugares = null;
  constructor(private lugaresServices: LugaresService) {
    lugaresServices.getLugares()
      .subscribe(lugares => {
        this.lugares = lugares;
        var me = this;
        me.lugares = Object.keys(me.lugares).map(function (key) {
          return  me.lugares[key];
        });
    });
  }
}
