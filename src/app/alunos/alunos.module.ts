import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos.routing.module';

@NgModule({
  declarations: [AlunosComponent, AlunoDetalheComponent, AlunoFormComponent],
  imports: [
    CommonModule,
    AlunosRoutingModule
  ]
})
export class AlunosModule { }
