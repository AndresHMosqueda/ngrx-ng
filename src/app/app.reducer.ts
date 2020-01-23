import { Action } from "@ngrx/store";
import * as fromMessageActions from './message.action';

// Estructura o modelo al estado de nuestra aplicacion
export interface appState {
  text: string;
}

export const initialState = {
  text: "Hola Andres"
};

export function miReducer(state: appState = initialState, action: fromMessageActions.MessageActions) {
  console.log(action);

  switch (action.type) {
    case fromMessageActions.SPANISH:
      return {
        ...state,
        text: action.payload
      };
    case fromMessageActions.ENGLISH:
      return {
        ...state,
        text: action.payload
      };
      default:
          return state;
  }
}
