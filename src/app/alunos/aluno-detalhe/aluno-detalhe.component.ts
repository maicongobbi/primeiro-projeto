import { Subscription } from 'rxjs';


import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from 'src/app/service/alunos.service';
import { Aluno } from '../aluno';


@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy
{

  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }
  ngOnInit()
  {
    /*
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }

      );
    console.log(this.aluno)

    console.log('ngOnInit: AlunoDetalheComponent');
    */

    //recebendo pelo resolver
    this.inscricao = this.route.data.subscribe(
      (info: { aluno: Aluno }) =>
      {
        console.log('Recebendo o obj Aluno do resolver');
        this.aluno = info.aluno;
      }
    );
  }

  editarContato()
  {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy()
  {
    this.inscricao.unsubscribe();
  }
}
