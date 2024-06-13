import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

export interface EventMessage {
  type: 'GamesSelected' | 'MoviesSelected' | 'BooksSelected';
  text?: string,
  value?: object | boolean
}

@Injectable({
  providedIn: 'root'
})
export class EventMessageService {

  // Tip: never expose the Subject itself.
  private eventMessageSubject = new Subject<EventMessage>();

  /** Observable of all messages */
  messages$ = this.eventMessageSubject.asObservable();

  emitGamesSelected(clicked: boolean) {
    this.eventMessageSubject.next({ type: 'GamesSelected', value: clicked });
  }

  emitMoviesSelected(clicked: boolean) {
    this.eventMessageSubject.next({ type: 'MoviesSelected', value: clicked });
  }

  emitBooksSelected(clicked: boolean) {
    this.eventMessageSubject.next({ type: 'BooksSelected', value: clicked });
  }
}
