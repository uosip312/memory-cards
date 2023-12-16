import { Component, OnInit } from '@angular/core';
import { Niveles } from 'src/app/utils/lista-niveles';
import { Nivel } from 'src/app/utils/nivel.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public jugador: string = 'Edison';
  public listaNiveles: Nivel[] = Niveles;
  public nivel!: Nivel;

  constructor() { }

  ngOnInit(): void {
  }

}
