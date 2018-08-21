import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Deck } from './models/deck.model';
import { Card } from './models/card.model';

@Injectable()
export class DeckService {
  constructor () {}

  /** Gets the deck with the provided id.*/
  getDeck(id: string): Observable<Deck> {
    const mockDeck = new Deck();
    mockDeck.id = 'mockDeck';
    mockDeck.name = 'Mock Deck';

    mockDeck.cards = new Array();

    mockDeck.cards.push(new Card('one', '1'));
    mockDeck.cards.push(new Card('two', '2'));
    mockDeck.cards.push(new Card('three', '3'));
    mockDeck.cards.push(new Card('five', '5'));
    mockDeck.cards.push(new Card('eight', '8'));
    mockDeck.cards.push(new Card('thirteen', '13'));
    mockDeck.cards.push(new Card('twenty', '20'));
    mockDeck.cards.push(new Card('forty', '40'));
    mockDeck.cards.push(new Card('hundred', '100'));
    mockDeck.cards.push(new Card('infinite', '∞'));
    mockDeck.cards.push(new Card('question', '?'));

    const subject = new BehaviorSubject<Deck>(mockDeck);
    return subject.asObservable();
  }
}
