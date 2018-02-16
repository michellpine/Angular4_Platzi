import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class LugaresService {
    API_ENDPOINT = 'https://platzisquare-1518537020173.firebaseio.com';
    lugares: any = {};

    constructor(private afDB: AngularFireDatabase, private http: Http) {}

    public getLugar(id) {
        return this.afDB.object('lugares/' + id);
    }

    public getLugares() {
        // return this.afDB.list('lugares/');
        return this.http.get(this.API_ENDPOINT + '/.json')
            .map((resultado) => {
                const data = resultado.json().lugares;
                return data;
            });
    }

    public guardarLugar(lugar) {
        // this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, {headers: headers}).subscribe();
    }

    public buscarLugar(id) {
        return this.lugares.filter((lugar) =>  {
             return lugar.id == id })[0] || null;
    }

    public editarLugar(lugar) {
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }

    public obtenerGeoData(direccion) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + direccion);
    }
}
