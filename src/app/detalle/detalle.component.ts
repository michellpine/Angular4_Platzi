import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { LugaresServices } from '../services/lugares.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent {
    id = null;
    lugar: any = { };
    constructor(private route: ActivatedRoute, private lugaresService: LugaresServices) {
        this.id = this.route.snapshot.params['id'];
        this.lugar = this.lugaresService.buscarLugar(this.id);
    }

}
