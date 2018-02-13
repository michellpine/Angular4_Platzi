import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
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
