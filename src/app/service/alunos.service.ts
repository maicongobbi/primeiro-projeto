import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  private alunos: any[] = [
    { id: 1, nome: "Aluno01", email: "aluno01@email" },
    { id: 2, nome: "Aluno02", email: "aluno021@email" },
    { id: 3, nome: "Aluno03", email: "aluno013@email" },
    { id: 4, nome: "Aluno04", email: "aluno014@email" },
    { id: 5, nome: "Aluno05", email: "aluno015@email" }

  ];
  getAlunos()
  {
    return this.alunos;

  }

  getAluno(id: number){
    for (let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      if (aluno.id == id){
        return aluno;
      }
    }
    return null;
  }
}
