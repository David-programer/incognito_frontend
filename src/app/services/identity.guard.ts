import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable()

export class IdentityGuard implements CanActivate{

    constructor(private _router: Router){}

    canActivate(){
        // let token = localStorage.getItem('token');
        let identity = JSON.parse(`${localStorage.getItem('identity')}`);
        
        if(identity) return true;
        else {
            this._router.navigate(['login']);
            return false;
        }
    }
}