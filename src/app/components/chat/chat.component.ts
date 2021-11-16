/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { ChatService } from '../../services/chat.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit, OnDestroy {
  texto: string = ''
  mensajeSubscription: Subscription = Subscription.EMPTY
  elemento!: HTMLElement
  mensajes: any[] = []

  constructor (public chatService: ChatService) { }

  ngOnInit (): void {
    // capturar el elemento del chat para poderlo scrollear
    this.elemento = document.getElementById('chat-mensajes')!

    // suscribirse al observable para recibir los mensajes y mostrarlos
    this.mensajeSubscription = this.chatService.getMessages().subscribe(msg => {
      this.mensajes.push(msg)

      // scroll al final del chat
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight
      }, 50)
    })
  }

  ngOnDestroy (): void {
    // Unsubscribe to avoid memory leaks
    this.mensajeSubscription.unsubscribe()
  }

  // Enviar mensaje y limpiar el input
  enviar (): void {
    if (this.texto.trim().length === 0) { return } // no enviar mensajes vacios
    this.chatService.sendMessage(this.texto)
    this.texto = ''
  }
}
