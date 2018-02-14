import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'place', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContarClicksDirective,
    ResaltarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjNL7_8fvvTCiz8k_iG_xiPrLP8aQyvSI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
