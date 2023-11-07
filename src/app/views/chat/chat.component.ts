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

  ngOnInit(): void {
  }
}