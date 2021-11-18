import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'

import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
import { ChatComponent } from './components/chat/chat.component'
import { FooterComponent } from './components/footer/footer.component'
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component'
import { LoginComponent } from './pages/login/login.component'
import { MensajesComponent } from './pages/mensajes/mensajes.component'

const config: SocketIoConfig = {
  url: environment.wsUrl,
  options: {}
}

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    FooterComponent,
    ListaUsuariosComponent,
    LoginComponent,
    MensajesComponent
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
