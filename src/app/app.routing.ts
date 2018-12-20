import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [
  { path: "", component: HomeComponent }, //caminho padrão
 // { path: "cursos", component: CursosComponent },
 // { path: "curso/:id", component: CursoDetalheComponent },
  { path: "login", component: LoginComponent },
  { path: "naoEncontrado", component: CursoNaoEncontradoComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
