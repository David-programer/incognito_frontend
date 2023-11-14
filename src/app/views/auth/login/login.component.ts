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

  public login = new FormGroup({
    nickname : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  });

  public login_submit(event:any):void{
    event.preventDefault();
    if(this.login.invalid) return
    let {nickname, password} = this.login.value;

    this.socket.emit('login', {nickname: nickname?.trim().toLowerCase(), password} , (res:any) =>{
      if(res.successful){
        localStorage.setItem('identity', JSON.stringify(res.data));
        this.router.navigate(['home']);
      }
      console.log(res)
    });
  }

  ngOnInit(): void {
    const identity = localStorage.getItem('identity');
    if(identity) this.router.navigate(['home/chat'])

    this.socket.on('login', (res:any) =>{
      console.log(res)
      if(res.successful){
        // this.message = '';
        // localStorage.setItem('token', res.token);
        // this.router.navigate(['home']);
      }else {
        // this.message = res.message
      }
    });
  }
}
