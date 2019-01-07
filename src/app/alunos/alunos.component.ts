import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../service/alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  constructor(private alunosService: AlunosService) { }

   alunos: any[];

  ngOnInit()
  {
    this.alunos = this.alunosService.getAlunos();
  }

}
