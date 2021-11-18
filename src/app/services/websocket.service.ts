import { Injectable } from '@angular/core'
import { Socket } from 'ngx-socket-io'
import { Observable } from 'rxjs'
// import { Usuario } from '../models/usuario'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus: boolean = false
  // public usuario: Usuario

  constructor (private readonly socket: Socket) { this.checkStatus() }

  // Check the status of the socket
  checkStatus (): void {
    // Socket emit an event when the connection is established
    this.socket.on('connect', () => {
      console.log('Conectado al servidor')
      this.socketStatus = true
    })

    // Socket emit an event when the connection is closed
    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor')
      this.socketStatus = false
    })
  }

  // Emit any event to the server
  emit (event: string, payload?: any, callback?: Function): void {
    console.log('Emitiendo', event)
    this.socket.emit(event, payload, callback)
  }

  // Listen to any event from the server
  listen (event: string): Observable<any> {
    return this.socket.fromEvent(event)
  }

  // Emit an event loginWS to the server
  loginWS (nombre: string): void {
    console.log('Configurando', nombre)

    // Reultiliza el método emit para emitir el evento configurar-usuario
    this.emit('configurar-usuario', { nombre }, (resp: any) => {
      console.log(resp)
    })
  }
}
