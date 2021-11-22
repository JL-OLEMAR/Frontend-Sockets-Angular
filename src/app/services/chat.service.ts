import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { WebsocketService } from './websocket.service'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor (public wsService: WebsocketService) { }

  // send message to server
  sendMessage (mensaje: string): void {
    const payload = {
      de: this.wsService.getUsuario().nombre,
      cuerpo: mensaje
    }

    // Emit the event 'mensaje' with the payload
    this.wsService.emit('mensaje', payload)
  }

  // Listen to the 'mensaje' event
  getMessages (): Observable<any> {
    return this.wsService.listen('mensaje-nuevo')
  }

  // Listen to the 'mensaje-privado' event
  getMessagesPrivate (): Observable<any> {
    return this.wsService.listen('mensaje-privado')
  }

  // Listen to the 'usuarios-activos' event
  getUsuariosActivos (): Observable<any> {
    return this.wsService.listen('usuarios-activos')
  }

  // Emit the event 'obtener-usuarios'
  emitirUsuariosActivos (): void {
    this.wsService.emit('obtener-usuarios')
  }
}
