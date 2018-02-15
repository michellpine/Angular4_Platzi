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
        console.log(this.route.snapshot.params['id']);
        console.log(this.route.snapshot.queryParams['actions2']);
        this.id = this.route.snapshot.params['id'];
        this.lugar = this.lugaresService.buscarLugar(this.id);
    }

}
