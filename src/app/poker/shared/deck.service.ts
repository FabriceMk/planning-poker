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

    mockDeck.cards = new Array<Card>();

    mockDeck.cards.push(new Card('1'));
    mockDeck.cards.push(new Card('2'));
    mockDeck.cards.push(new Card('3'));
    mockDeck.cards.push(new Card('5'));
    mockDeck.cards.push(new Card('8'));
    mockDeck.cards.push(new Card('13'));
    mockDeck.cards.push(new Card('20'));
    mockDeck.cards.push(new Card('40'));
    mockDeck.cards.push(new Card('100'));
    mockDeck.cards.push(new Card('∞'));
    mockDeck.cards.push(new Card('?'));

    const subject = new BehaviorSubject<Deck>(mockDeck);
    return subject.asObservable();
  }
}
