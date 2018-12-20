import { Subscription } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { CursosService } from "./cursos.service";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { Router } from "@angular/router";

// tslint:disable-next-line:component-selector
@Component({
  // tslint:disable-next-line:component-selector
  selector: " cursos ",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.scss"]
})
export class CursosComponent implements OnInit
{
  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  proximaPagina(){
    this.pagina++;
    this.router.navigate(['/cursos'],
      {queryParams: {'pagina': ++this.pagina}});
  }




  botaoClicado() {
    console.log("o btn foi clicado");
  }

  onKeyUp(evento: KeyboardEvent) {
    (<HTMLInputElement>evento.target).value;
  }

  onMudouValor(evento) {
    console.log("on mudou valor ", evento.valor);
  }

  public mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  private _mobileQueryListener: () => void;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h =>
    h.test(window.location.host)
  );
}
