import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { appState } from "./app.reducer";
import * as fromMessageAction from './message.action';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  dato$: Observable<any>;

  //Nos va a permitir tener acceso directo al store o base de datos del cliente
  constructor(private store: Store<appState>) {
    //select para acceder a solamente una porcion del store
    this.dato$ = store.select('mensaje');
  }

  spanishM() {
    //dispatch nos ayuda a emitir una accion
    this.store.dispatch(new fromMessageAction.SpanishMessage('Los colores'));
  }

  englishM() {
    this.store.dispatch(new fromMessageAction.EnglishMessage('The colors..'))
  }
}
