import { Component, OnInit } from '@angular/core'
import { ChatService } from '../../services/chat.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  texto: string = ''
  constructor (public chatService: ChatService) { }

  ngOnInit (): void {
  }

  enviar (): void {
    this.chatService.sendMessage(this.texto)
    this.texto = ''
  }
}
