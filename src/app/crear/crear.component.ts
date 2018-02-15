import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html'
})
export class CrearComponent {
    lugar: any = {};
    constructor(private lugaresService: LugaresService) {
    }
    guardarLugar() {
        var direccion = this.lugar.calle + ',' + this.lugar.cuidad + ',' + this.lugar.pais;
        this.lugaresService.obtenerGeoData(direccion)
            .subscribe(result => {
                this.lugar.lat = 0;
                this.lugar.lng = 0;
                this.lugar.id = Date.now();
                this.lugaresService.guardarLugar(this.lugar);
                alert('Negocio guardado con exito');
                this.lugar = {};
            });
    }
}
