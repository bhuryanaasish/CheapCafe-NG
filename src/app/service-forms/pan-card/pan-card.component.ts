import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanCardService } from 'src/app/api-services/pan-card.service'; 

@Component({
  selector: 'app-pan-card',
  templateUrl: './pan-card.component.html',
  styleUrls: ['./pan-card.component.css']
})
export class PanCardComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _panCardService: PanCardService
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      fatherName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      subject: ['', Validators.required],
      aadharFront: [null, Validators.required],
      aadharBack: [null, Validators.required],
      photo: [null],
      signature: [null]
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const formData = new FormData();

      // Add form fields to the FormData object
      formData.append('name', this.profileForm.get('name')?.value);
      formData.append('fatherName', this.profileForm.get('fatherName')?.value);
      formData.append('email', this.profileForm.get('email')?.value);
      formData.append('phone', this.profileForm.get('phone')?.value);
      formData.append('subject', this.profileForm.get('subject')?.value);
      
      // Add files (if any)
      if (this.profileForm.get('aadharFront')?.value) {
        formData.append('aadharFront', this.profileForm.get('aadharFront')?.value);
      }
      if (this.profileForm.get('aadharBack')?.value) {
        formData.append('aadharBack', this.profileForm.get('aadharBack')?.value);
      }
      if (this.profileForm.get('photo')?.value) {
        formData.append('photo', this.profileForm.get('photo')?.value);
      }
      if (this.profileForm.get('signature')?.value) {
        formData.append('signature', this.profileForm.get('signature')?.value);
      }

      // Use FormService to submit the form
      this._panCardService.submitForm(formData).subscribe(
        response => {
          console.log('Form submitted successfully:', response);
        },
        error => {
          console.error('Error submitting form:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
