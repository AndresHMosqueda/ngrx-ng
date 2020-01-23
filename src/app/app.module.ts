import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { StoreModule } from "@ngrx/store";
import { miReducer } from './app.reducer';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      mensaje: miReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 4
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
