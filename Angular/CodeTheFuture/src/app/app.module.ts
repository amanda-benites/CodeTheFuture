import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tela1Component } from './components/tela1/tela1.component';
import { Tela2Component } from './components/tela2/tela2.component';

@NgModule({
  declarations: [
    AppComponent,
    Tela1Component,
    Tela2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
