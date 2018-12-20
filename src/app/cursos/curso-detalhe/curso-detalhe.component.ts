import { CursosService } from './../cursos.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "curso-detalhe",
  templateUrl: "./curso-detalhe.component.html",
  styleUrls: ["./curso-detalhe.component.scss"]
})
export class CursoDetalheComponent implements OnInit
{

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService)
  {
    /* this.idCurso = this.route.snapshot.params['id']; */
  }

  @Input() testePropriedade;

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(this.id);

        /* if (this.curso == null){
          this.router.navigate(['/naoEncontrado']); // navega para uma roda pré definida
          console.log('entrou no nao');

        } */
      }
    );
  }


  @Output() mudouValor = new EventEmitter();

  onClink() {
    console.log("vai mudar o valor");
    this.mudouValor.emit({ valor: "valor da mudanca" });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
