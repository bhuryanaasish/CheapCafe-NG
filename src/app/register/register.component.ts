import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  agreeTerm: boolean = false;

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    if (this.agreeTerm) {
      console.log('Form Submitted:', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        address: this.address,
        phone: this.phone,
        password: this.password
      });
      alert("Registration Successful!");
    } else {
      alert("Please agree to the terms of service.");
    }
  }

  ngOnInit(): void {
  }

}
