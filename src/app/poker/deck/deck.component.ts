import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';

import { DeckService } from '../shared/deck.service';
import { Deck } from '../shared/models/deck.model';

/**
 * Component to display a deck.
 */
@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  /** The current deck. */
  deck: Deck;

  /** If the deck is currently loading. */
  isLoading: boolean;

  /** If there was an error during the deck loading. */
  hasError: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deckService: DeckService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: ParamMap) => this.deckService.getDeck(params['id']))
      .finally(() => this.isLoading = false)
      .subscribe(
        deck => {
          this.deck = deck;
        },
        error => {
          this.hasError = true;
        }
      );
  }

}
