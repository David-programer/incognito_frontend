import { AppComponent } from './app.component';
import { NgModule, isDevMode } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { ChatComponent } from './views/chat/chat.component';
import { FeedComponent } from './views/feed/feed.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';

//Variables de entorno
import { environment } from '../environments/environment';
import { LoginComponent } from './views/login/login.component';
import { PublicationsComponent } from './views/publications/publications.component';
import { IntenalcoComponent } from './views/events/intenalco/intenalco.component';
const SocketConfig:SocketIoConfig = { url: environment.socket, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    FeedComponent,
    LoginComponent,
    DefaultLayoutComponent,
    PublicationsComponent,
    IntenalcoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(SocketConfig),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
