import { Component } from '@angular/core'
import { WebsocketService } from '../../services/websocket.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  constructor (public wsService: WebsocketService) { }
}
