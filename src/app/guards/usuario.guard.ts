/* eslint-disable @typescript-eslint/no-floating-promises, @typescript-eslint/strict-boolean-expressions */
import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { WebsocketService } from '../services/websocket.service'

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  constructor (
    public wsService: WebsocketService,
    private readonly router: Router
  ) { }

  canActivate (): any {
    if (this.wsService.getUsuario()) {
      return true
    } else {
      this.router.navigateByUrl('/')
      return false
    }
  }
}
