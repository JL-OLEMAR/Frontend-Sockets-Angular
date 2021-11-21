/* eslint-disable @typescript-eslint/no-floating-promises */
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { WebsocketService } from '../../services/websocket.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  nombre: string = ''

  constructor (
    public wsService: WebsocketService,
    private readonly router: Router
  ) { }

  ingresar (): any {
    this.wsService.loginWS(this.nombre).then(() => {
      this.router.navigateByUrl('/mensajes')
    })
    this.nombre = ''
  }
}
