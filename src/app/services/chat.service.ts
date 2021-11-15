import { Injectable } from '@angular/core'
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
    this.wsService.emit('mensaje', payload)
  }
}
