import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { GameService } from 'src/app/services/game.service';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let gameServiceSpy: jasmine.SpyObj<GameService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('GameService', ['iniciarJuego']);

    await TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers: [
        { provide: GameService, useValue: spy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    gameServiceSpy = TestBed.inject(GameService) as jasmine.SpyObj<GameService>;
  });

  it('Debe crear el GameComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Debería llamar al método iniciarJuego cuando se clickea el boton jugar', () => {
    component.jugar();
    expect(gameServiceSpy.iniciarJuego).toHaveBeenCalled();
  });

});
