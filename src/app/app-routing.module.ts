import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ChatComponent } from './views/chat/chat.component';
import { LoginComponent } from './views/auth/login/login.component';
import { FeedComponent } from './views/feed/feed.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { PublicationsComponent } from './views/publications/publications.component';
import { RegisterUserComponent } from './views/auth/register/register.user/register.user.component';
import { WelcomeComponent } from './views/auth/welcome/welcome.component';
import { IdentityGuard } from './services/identity.guard';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'events/intenalco', component: HomeComponent, data: { title: 'Evento Intenalco' }},
  { path: 'events/intenalco/:id', component: HomeComponent, data: { title: 'Evento Intenalco' }},
  // canActivate: [LoginGuard]
  // { path: '404', component: P404Component, data: { title: 'Page 404' } },
  // { path: '500', component: P500Component, data: { title: 'Page 500' } },
  // { path: 'logout/:sure', component: LoginComponent, data: { title: 'Logout Page' } },
  // { path: 'register', component: RegisterComponent, data: { title: 'Register Page' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' }},
  { path: 'welcome', component: WelcomeComponent, data: { title: 'Welcome' }},
  { path: 'auth/register/user', component: RegisterUserComponent, data: { title: 'Register User' }},
  { path: 'home', component: DefaultLayoutComponent, canActivate: [IdentityGuard], data: { title: 'BETA' }, 
    children: [
      { path: 'chat', component: ChatComponent, data: { title: 'Chat Intenalco' }},
      { path: 'feed', component: FeedComponent, data: { title: 'Feed Intenalco' }},
      { path: 'publications', component: PublicationsComponent, data: { title: 'Publicaciones Intenalco' }},
      // { path: 'home',component: HomeComponent, data: { title: 'Inicio' } }
     ]
  },
  // { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
