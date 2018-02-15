import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresServices } from './services/lugares.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear', component: CrearComponent}
];
export const firebaseConfig = {
  apiKey: 'AIzaSyClC0gG-TVrIsKUG9pNgqsI8jvkn7LquYE',
  authDomain: 'platzisquare-1518537020173.firebaseapp.com',
  databaseURL: 'https://platzisquare-1518537020173.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '594442204675'
};

@NgModule({
  declarations: [
    AppComponent,
    ContarClicksDirective,
    ResaltarDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjNL7_8fvvTCiz8k_iG_xiPrLP8aQyvSI'
    }),
    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [LugaresServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
