import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:component-selector
@Component({
  // tslint:disable-next-line:component-selector
  selector: ' cursos ',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    console.log('o btn foi clicado');

  }

  onKeyUp(evento: KeyboardEvent) {
    (<HTMLInputElement>evento.target).value;
  }

  onMudouValor(evento){
    console.log('on mudou valor ',evento.valor);
  }
}
