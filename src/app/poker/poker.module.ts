import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MaterialExporterModule } from './../material-exporter.module';

import { PokerRoutingModule } from './poker-routing.module';

import { DeckComponent } from './deck/deck.component';
import { DeckService } from './shared/deck.service';
import { HeroCardComponent } from './hero-card/hero-card.component';

/**
 * Module for everything related to dances
 */
@NgModule({
  imports: [
    SharedModule,
    MaterialExporterModule,
    PokerRoutingModule
  ],
  declarations: [
    DeckComponent,
    HeroCardComponent
  ],
  exports: [],
  providers: [
    DeckService
  ]
})
export class PokerModule {}
