import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit(): void {
    if (this.email && this.password) {
      // Add authentication logic here
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      console.log('Remember Me:', this.rememberMe);
    }
  }

  ngOnInit(): void {
  }

}
