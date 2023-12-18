import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberListComponent } from './number-list.component';
import { GameService } from 'src/app/services/game.service';

describe('NumberListComponent', () => {
  let component: NumberListComponent;
  let fixture: ComponentFixture<NumberListComponent>;
  let gameServiceSpy: jasmine.SpyObj<GameService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('GameService', [
      'numeroParaAdivinar$', 
      'iniciarConteoRegresivo', 
      'seleccionarNumeroAleatorio', 
      'calcularPuntuacion']);

    TestBed.configureTestingModule({
      declarations: [NumberListComponent],
      providers: [{ provide: GameService, useValue: spy }]
    });

    fixture = TestBed.createComponent(NumberListComponent);
    component = fixture.componentInstance;
    gameServiceSpy = TestBed.inject(GameService) as jasmine.SpyObj<GameService>;
  });

  it('Debe crear el NumberListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Debería inicializar las propiedades del componente en ngOnChanges', () => {
    const changes = { arregloNumeros: { previousValue: [], currentValue: [1,2,3,4,5,6,7,8,9] } } as any;

    gameServiceSpy.nivel = {id: 3, texto: 'Alto', tiempo: 2000, puntos: 30};
    gameServiceSpy.numeroParaAdivinar$.next(4);

    component.ngOnChanges(changes);

    expect(component.nivel).toEqual(gameServiceSpy.nivel);
    expect(component.clasePadNumerico).toEqual('');
    expect(component.mostrarNumero).toBeTruthy();
    expect(component.indexNumeroClickeado).toBeNull();
    expect(gameServiceSpy.iniciarConteoRegresivo).toHaveBeenCalled();
    expect(gameServiceSpy.seleccionarNumeroAleatorio).toHaveBeenCalledWith(3);
  });

});
