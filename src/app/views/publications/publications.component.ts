import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})

export class PublicationsComponent implements OnInit{

  constructor(private _globalService: GlobalService){}

  public publication = new FormGroup({
    file: new FormControl(''),
    likes: new FormControl(0, [Validators.required]),
    title: new FormControl('', [Validators.required]),
    srcImage: new FormControl('', [Validators.required]),
  });

  public sendImage():void{
    const formData = new FormData();
    let inputFiles:any = document.getElementById('file');

    formData.append('files', inputFiles.files[0])
    this._globalService.postRequest('/img/uploadImg', formData).subscribe((response)=>{
      console.log(response)
    })
  }

  ngOnInit(): void {
      
  } 

}
