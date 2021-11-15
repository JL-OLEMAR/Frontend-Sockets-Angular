import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'

import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { ChatComponent } from './components/chat/chat.component'
import { FooterComponent } from './components/footer/footer.component'

const config: SocketIoConfig = {
  url: environment.wsUrl,
  options: {}
}

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
