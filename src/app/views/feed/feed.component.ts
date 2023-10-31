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
    this._globalService.getRequest('/feed/getFeed').subscribe((response:any)=>{
      if(response.successful){
        this.feed.next(response.data);
      }
    });

    this.socket.on(`publication`, (response:any)=> { 
      this.feed.next([...this.feed.getValue(), response]);
      setTimeout(() => {
        const elemento:any = document.getElementById('container_feed'); // Reemplaza 'miElemento' con el ID de tu elemento
        elemento.scrollTop = elemento.scrollHeight;
      }, 200);
    });
  }
}
