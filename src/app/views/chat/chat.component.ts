import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit} from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  constructor(private socket: Socket, private _globalService: GlobalService, private router:Router){}

  public user:any = {};
  public messages = new BehaviorSubject<any>([]);

  public message = new FormGroup({
    message : new FormControl('', [Validators.required])
  })

  public sendMessage(event:any){
    if(this.message.invalid) return
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem('identity') ?? '')
    this.socket.emit('message', {...user, ...this.message.value}, (res:any) =>{
      if(res.successful){
        this.message.reset()
      }
      // if(res.successful){
      //   this.message = '';
      //   localStorage.setItem('token', res.token);
      //   this.router.navigate(['home']);
      // }else this.message = res.message
    });
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('identity') ?? 'null');
    if(!this.user) this.router.navigate(['/login'])
    
    this._globalService.getRequest('/messages/getMessages').subscribe((response:any)=>{
      if(response.successful){
        this.messages.next(response.data)
      }
    })

    // this.logout('interruptedSession')
    this.socket.on(`message`, (message:any)=> { 
      this.messages.next([...this.messages.getValue(), message]);
      setTimeout(() => {
        const elemento:any = document.getElementById('container_messages'); // Reemplaza 'miElemento' con el ID de tu elemento
        elemento.scrollTop = elemento.scrollHeight;
      }, 200);
    });
  }
}