import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {active: true, acticvactiva: true, nombre:'Florería la Gardenia'},
    {active: true, nombre:'Donas la pasadita'},
    {active: true, nombre:'Veterinaria Huellitas Felices'},
    {active: false, nombre:'Florería la Gardenia'},
    {active: true, nombre:'Donas la pasadita'},
    {active: true, nombre:'Veterinaria Huellitas Felices'}
  ];

  constructor(){

  }
}
