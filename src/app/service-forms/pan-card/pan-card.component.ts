import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pan-card',
  templateUrl: './pan-card.component.html',
  styleUrls: ['./pan-card.component.css']
})
export class PanCardComponent implements OnInit {
  // Model to hold the form data
  formData = {
    name: '',
    fatherName: '',
    email: '',
    phone: '',
    subject: '',
    aadharFront: null,
    aadharBack: null,
    photo: null,
    signature: null
  };

  // Function to handle form submission
  onSubmit(): void {
    if (this.isFormValid()) {
      // Your form submission logic goes here, for example:
      console.log('Form submitted with the following data:', this.formData);
    } else {
      console.log('Form is invalid');
    }
  }

  // Validation function for the form (for custom checks, if needed)
  isFormValid(): boolean {
    // Return true if formData meets custom validation criteria
    // This function can be expanded to check any additional rules
    for (let key in this.formData) {
      // if (this.formData[key] === '' || this.formData[key] === null) {
      //   return false;
      // }
    }
    return true;
  }

  ngOnInit(): void {
  }

}
