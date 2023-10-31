import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ChatComponent } from './views/chat/chat.component';
import { LoginComponent } from './views/login/login.component';
import { FeedComponent } from './views/feed/feed.component';

const routes: Routes = [
  { path: '', redirectTo: 'intenalco', pathMatch: 'full'},
  { path: 'intenalco', component: HomeComponent, data: { title: 'Evento Intenalco' }},
  { path: 'intenalco/:id', component: HomeComponent, data: { title: 'Evento Intenalco' }},
  { path: 'chat', component: ChatComponent, data: { title: 'Chat Intenalco' }},
  { path: 'login', component: LoginComponent, data: { title: 'Login Intenalco' }},
  { path: 'feed', component: FeedComponent, data: { title: 'Feed Intenalco' }},
  // canActivate: [LoginGuard]
  // { path: '404', component: P404Component, data: { title: 'Page 404' } },
  // { path: '500', component: P500Component, data: { title: 'Page 500' } },
  // { path: 'logout/:sure', component: LoginComponent, data: { title: 'Logout Page' } },
  // { path: 'register', component: RegisterComponent, data: { title: 'Register Page' } },
  // { path: '', component: DefaultLayoutComponent, canActivate: [IdentityGuard], data: { title: '' }, 
  //   children: [
  //     // { path: 'home',component: HomeComponent, data: { title: 'Inicio' } }
  //    ]
  // },
  // { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
