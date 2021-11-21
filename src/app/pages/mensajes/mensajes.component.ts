import { Component } from '@angular/core'
import { WebsocketService } from '../../services/websocket.service'

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: []
})
export class MensajesComponent {
  constructor (public wsService: WebsocketService) { }
}
