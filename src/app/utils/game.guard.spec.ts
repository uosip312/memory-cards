import { TestBed } from '@angular/core/testing';

import { GameGuard } from './game.guard';

describe('GameGuard', () => {
  let guard: GameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GameGuard);
  });

  it('Debe crear Guard', () => {
    expect(guard).toBeTruthy();
  });
});
