import { Component } from '@angular/core';
import { LugaresServices } from '../services/lugares.service';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})
export class CrearComponent {
    lugar: any = {};
    constructor(private lugaresService: LugaresServices) {
    }
    guardarLugar() {
        this.lugaresService.guardarLugar(this.lugar);
    }
}
