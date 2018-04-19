import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Deck } from './models/deck.model';

@Injectable()
export class DeckService {
  constructor () {}

  /** Gets the deck with the provided id.*/
  getDeck(id: string): Observable<Deck> {
    return new Observable<Deck>();
  }
}
