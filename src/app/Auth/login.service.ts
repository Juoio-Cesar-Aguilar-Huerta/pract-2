import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private servHTTP:HttpClient) { }
  public login (user:any){
    return "ya estoy aqui"
  }

  }


