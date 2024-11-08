import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  fullName: string = '';
  emailAddress: string = '';
  subject: string = '';
  message: string = '';

  onSubmit() {
    // Log or send the form data
    console.log('Form submitted!');
    console.log('Name:', this.fullName);
    console.log('Email:', this.emailAddress);
    console.log('Subject:', this.subject);
    console.log('Message:', this.message);
    
    // You can add form submission logic here, like an HTTP request
  }

  ngOnInit(): void {
  }

}
