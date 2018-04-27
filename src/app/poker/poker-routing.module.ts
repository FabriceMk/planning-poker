import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeckComponent } from './deck/deck.component';

const pokerRoutes: Routes = [
  { path: 'deck/:id',  component: DeckComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(pokerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokerRoutingModule { }
