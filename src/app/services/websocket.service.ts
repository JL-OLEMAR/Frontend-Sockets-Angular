import { Injectable } from '@angular/core'
import { Socket } from 'ngx-socket-io'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus: boolean = false

  constructor (private readonly socket: Socket) {
    this.checkStatus()
  }

  // Check if the websocket is connected
  checkStatus (): void {
    // Socket is connected
    this.socket.on('connect', () => {
      console.log('Conectado al servidor')
      this.socketStatus = true
    })

    // Socket is disconnected
    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor')
      this.socketStatus = false
    })
  }
}
