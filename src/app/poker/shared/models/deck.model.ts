import { Card } from './card.model';

/** Represents a deck of cards. */
export class Deck {
  /** Deck Id. */
  id: string;

  /** Deck name. */
  name: string;

  /** The cards the deck contains. */
  cards: Card[];
}
