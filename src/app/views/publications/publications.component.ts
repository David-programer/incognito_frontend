import { Socket } from 'ngx-socket-io';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import {environment} from '../../../environments/environment'

@Component({
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})

export class PublicationsComponent implements OnInit{
  constructor(private socket: Socket, private _globalService: GlobalService){}

  public publication = new FormGroup({
    file: new FormControl(''),
    likes: new FormControl(0, [Validators.required]),
    title: new FormControl('', [Validators.required]),
    srcImage: new FormControl('', [Validators.required]),
  });

  public sendImage():void{
    const formData = new FormData();
    let inputFiles:any = document.getElementById('file');
    formData.append('files', inputFiles.files[0]);

    this._globalService.postRequest('/img/uploadImg', formData).subscribe((response:any)=>{
      if(response.successful){
        let {filename} = response.data;
        const fileName = `${environment.api_rest}/storage/intenalco/${filename}`;
        this.publication.controls['srcImage'].setValue(fileName);

        this.socket.emit('publication', this.publication.value, (res:any) =>{
          if(res.successful){
            this.publication.reset();
          }
        });
      }
    })
  }

  ngOnInit(): void {

  } 
}
