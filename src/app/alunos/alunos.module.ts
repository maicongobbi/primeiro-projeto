import { AlunoDetalheResolver } from './resolver/aluno-detalhe.resolver';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { FormsModule } from '@angular/forms';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from '../service/alunos.service';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      AlunosRoutingModule
  ],
  exports: [],
  declarations: [
      AlunosComponent,
      AlunoFormComponent,
      AlunoDetalheComponent
  ],
  providers: [
    AlunosService,
    AlunosGuard,
     AlunosDeactivateGuard,
     AlunoDetalheResolver
  ],
})
export class AlunosModule { }
