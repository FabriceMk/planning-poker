/** Card model. */
export class Card {
  /** Id of the Card. */
  id: string;

  /** String value of the card. */
  value: string;

  constructor(id: string, value: string) {
    this.id = id;
    this.value = value;
  }
}
