import { Action } from "@ngrx/store";
//action
export const SPANISH = " [MESSAGE] SPANISH ";
export const ENGLISH = " [MESSAGE] ENGLISH ";

//action creators
export class SpanishMessage implements Action {
  readonly type = SPANISH;
  constructor(public payload: string) {}
}

export class EnglishMessage implements Action {
  readonly type = ENGLISH;
  constructor(public payload: string) {}
}

export type MessageActions = SpanishMessage | EnglishMessage;
