import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  constructor() { }

  @Input() testePropriedade

  ngOnInit() {
    console.log('prop', this.testePropriedade);

  }
  @Output() mudouValor = new EventEmitter();

onClink(){
  console.log('vai mudar o valor');
  this.mudouValor.emit({valor:'valor da mudanca'})
}
}
