import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";

const APP_ROUTES: Routes = [
  { path: "", component: HomeComponent }, //caminho padrão
  { path: "cursos", component: CursosComponent },
  { path: "login", component: LoginComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
