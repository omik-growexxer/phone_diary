import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  LoginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  });

  constructor(private router: Router, private aService: AuthService){

  }
  onClick(){
    console.log('Email: ', this.LoginForm.value.username);
    console.log('Password: ', this.LoginForm.value.password);
    this.aService.login(this.LoginForm.value.username!,this.LoginForm.value.password!);
    this.router.navigate(['']);
  }
}
