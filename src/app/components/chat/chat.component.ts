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

  constructor (public chatService: ChatService) { }

  ngOnInit (): void {
    this.mensajeSubscription = this.chatService.getMessages().subscribe(msg => {
      console.log(msg)
    })
  }

  ngOnDestroy (): void {
    // Unsubscribe to avoid memory leaks
    this.mensajeSubscription.unsubscribe()
  }

  enviar (): void {
    this.chatService.sendMessage(this.texto)
    this.texto = ''
  }
}
