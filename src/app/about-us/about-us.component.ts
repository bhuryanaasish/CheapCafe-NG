import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  teamMembers = [
    {
      name: 'Mr. Amarjeet Singh',
      position: 'Manager',
      imageUrl: 'assets/img/doctors/doctor_1.jpg'
    },
    {
      name: 'Mr. Perfect',
      position: 'Vice President',
      imageUrl: 'assets/img/doctors/doctor_2.jpg'
    },
    {
      name: 'Dr. Rebecca Steffany',
      position: 'General Health',
      imageUrl: 'assets/img/doctors/doctor_3.jpg'
    }
  ];

  ngOnInit(): void {
  }

}
