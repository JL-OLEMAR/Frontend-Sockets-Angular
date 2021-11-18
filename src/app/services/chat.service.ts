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
      de: 'Pepito',
      cuerpo: mensaje
    }

    // Emit the event 'mensaje' with the payload
    this.wsService.emit('mensaje', payload)
  }

  // Listen to the 'mensaje' event
  getMessages (): Observable<any> {
    return this.wsService.listen('mensaje-nuevo')
  }
}
