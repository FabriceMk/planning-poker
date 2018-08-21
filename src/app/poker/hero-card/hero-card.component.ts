import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../shared/models/card.model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit(): void { }
}
