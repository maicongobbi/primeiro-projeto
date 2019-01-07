import { RouterModule } from "@angular/router";
import { AlunosComponent } from "./alunos.component";
import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";

const alunosRoutes = [
  {
    path: "",
    component: AlunosComponent,
    children: [
      {
        path: "novo",
        component: AlunoFormComponent
      },
      { path: ":id", component: AlunoDetalheComponent },
      { path: ":id/editar", component: AlunoFormComponent }
    ]
  }
]; //atentar para a disposiçao das rpotas para evitar que colidam, são avaliadas sempre na ordem em que são colocadas
//ra evitar repeticção do alubos/ usa-se rotas filhas
//colocar no alunos component o routerOutlet para que seja feito o redirecionamento para as rotas filhas
@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {}
