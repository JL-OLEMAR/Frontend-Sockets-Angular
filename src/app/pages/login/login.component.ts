import { Component, OnInit } from '@angular/core'
import { WebsocketService } from '../../services/websocket.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  nombre: string = ''
  constructor (public wsService: WebsocketService) { }

  ngOnInit (): void {
  }

  ingresar (): void {
    this.wsService.loginWS(this.nombre)
    this.nombre = ''
  }
}
