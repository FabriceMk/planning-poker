import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { DeckComponent } from './deck.component';
import { MaterialExporterModule } from '../../material-exporter.module';
import { ActivatedRouteStub } from '../../../testing/activated-route-stub';
import { DeckService } from '../shared/deck.service';
import { Deck } from '../shared/models/deck.model';

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
const activatedRouteStub = new ActivatedRouteStub();
const deckServiceStub = {
  getDeck: (_deckId => new Deck())
 };

describe('DeckComponent', () => {
  let component: DeckComponent;
  let fixture: ComponentFixture<DeckComponent>;

  beforeEach(async(() => {
    activatedRouteStub.setParamMap({ id: 'default' });
    TestBed.configureTestingModule({
      imports: [
        MaterialExporterModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: DeckService, useValue: deckServiceStub }
      ],
      declarations: [ DeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckComponent);
    component = fixture.componentInstance;
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
