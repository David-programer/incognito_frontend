import { Socket } from 'ngx-socket-io';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  constructor(private socket: Socket, private router:Router){}

  public user = new FormGroup({
    nickname : new FormControl('', [Validators.required])
  });

  public login(event:any, ):void{
    if(this.user.invalid) return
    event.preventDefault();

    this.socket.emit('login', this.user.value, (res:any) =>{
      if(res.successful){
        localStorage.setItem('identity', JSON.stringify(res.data));
        this.router.navigate(['home/chat']);
      }
    });
  }

  ngOnInit(): void {
    const identity = localStorage.getItem('identity');
    if(identity) this.router.navigate(['home/chat'])

    // this.socket.('login');

    // (res:any) =>{
    //   if(res.successful){
    //     this.message = '';
    //     localStorage.setItem('token', res.token);
    //     this.router.navigate(['home']);
    //   }else this.message = res.message
    // }
  }
}
