import { Socket } from 'ngx-socket-io';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})

export class DefaultLayoutComponent implements OnInit{
  constructor(private socket: Socket, private router:Router){}

  ngOnInit(): void {
    // this.socket.on(`logout:${this.listeningRoom}`, ()=> { this.logout('interruptedSession') });
  }
}
