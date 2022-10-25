import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { LoginService } from 'src/app/Auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private acceso: LoginService) { }

  ngOnInit(): void {
  }
  user={
    nombre: '',
    pass: ''
  }
  validar(){
    if(this.user.nombre != "" && this.user.pass !=''){
      console.log(this.acceso.login(this.user))
    }
  }
}

