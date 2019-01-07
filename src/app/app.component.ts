import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeiro projeto';
  public idCurso: string;

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService)
  {

  }
  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(
     mostrar =>this.mostrarMenu = mostrar
   )
  }
}
