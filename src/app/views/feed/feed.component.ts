import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit{
  constructor(private socket: Socket, private _globalService: GlobalService){}

  public feed = new BehaviorSubject<any[]>([])

  ngOnInit(): void {

  }
}
