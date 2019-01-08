import { Observable } from 'rxjs';
import { AlunosService } from './../../service/alunos.service';
import { Injectable } from '@angular/core';
import { Aluno } from './../aluno';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//resolver ele carrega as informações antes de o componente ser criado
@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

            console.log('AlunoDetalheResolver');

            let id = route.params['id'];

            return this.alunosService.getAluno(id);
    }
}
