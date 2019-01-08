import { AlunoDetalheResolver } from "./resolver/aluno-detalhe.resolver";
import { AlunosDeactivateGuard } from "./../guards/alunos-deactivate.guard";
import { AlunosGuard } from "./../guards/alunos.guard";
import { RouterModule } from "@angular/router";
import { AlunosComponent } from "./alunos.component";
import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { CanDeactivate } from "@angular/router/src/utils/preactivation";

const alunosRoutes = [
  {
    path: "",
    component: AlunosComponent,
    canActivateChild: [AlunosGuard], //se quiser qye esse guard funcione para a rota alunos - tem que colocar lá no app module routing, assiim ele lerá tbm essa rota
    children: [
      {
        path: "novo",
        component: AlunoFormComponent
      },
      {
        path: ":id",
        component: AlunoDetalheComponent,
        resolve: { aluno: AlunoDetalheResolver }
        //aluo é só uma variável do resolver
      },
      {
        path: ":id/editar",
        component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard]
      }
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
