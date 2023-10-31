// import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  
  constructor(private _http: HttpClient){}

  // let token  = localStorage.getItem('token'); 
  // public user = new BehaviorSubject<any>({
  //   "email": "", "id": 0, "profilePhoto": "https://media.tenor.com/XK37GfbV0g8AAAAC/loading-cargando.gif", "name": "Cargando...",
  //   "per_company": { "id": 0, "name": "Pullpos", "logo": "https://media.tenor.com/XK37GfbV0g8AAAAC/loading-cargando.gif", "colors": "" },
  //   "per_role": {"id": 1,"name": "Descargando recursos"}
  // });

  public postRequest(url:string, body:any){
    return this._http.post(`${environment.api_rest}${url}`, body,  { headers: {Authorization: 'Bearer '  + localStorage.getItem('token')}});
  }

  public getRequest(url:string){
    return this._http.get(`${environment.api_rest}${url}`, { headers: {Authorization: 'Bearer '  + localStorage.getItem('token')}});
  }
}
