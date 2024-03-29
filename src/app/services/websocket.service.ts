/* eslint-disable @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-floating-promises */
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Socket } from 'ngx-socket-io'
import { Usuario } from '../models/usuario'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus: boolean = false
  public usuario!: Usuario

  constructor (
    private readonly socket: Socket,
    public router: Router
  ) {
    this.cargarStorage()
    this.checkStatus()
  }

  // Check the status of the socket
  checkStatus (): void {
    // Socket emit an event when the connection is established
    this.socket.on('connect', () => {
      console.log('Conectado al servidor')
      this.socketStatus = true
      this.cargarStorage()
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
  loginWS (nombre: string): any {
    return new Promise((resolve, reject) => {
      // Reultiliza el método emit para emitir el evento configurar-usuario
      this.emit('configurar-usuario', { nombre }, (resp: any) => {
        this.usuario = new Usuario(nombre)
        this.guardarStorage()
        resolve(resp)
      })
    })
  }

  // Emit an event logoutWS to the server
  logoutWS (): void {
    this.usuario.nombre = ''
    localStorage.removeItem('usuario')

    const payload = { nombre: 'sin-nombre' }
    this.emit('configurar-usuario', payload, () => {})
    this.router.navigateByUrl('/')
  }

  // Get the object user
  getUsuario (): Usuario {
    return this.usuario
  }

  // Save the user in the localStorage
  guardarStorage (): void {
    localStorage.setItem('usuario', JSON.stringify(this.usuario))
  }

  // Get the user from the localStorage
  cargarStorage (): void {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario') as string)
      this.loginWS(this.usuario.nombre)
    }
  }
}
