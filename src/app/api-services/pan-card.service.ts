import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanCardService {

  private apiUrl: string = environment.apiEndpoint;
  constructor(private http: HttpClient) { }

  // Method to handle form submission (POST request)
  submitForm(formData: FormData): Observable<any> {
    debugger
    const url = `${this.apiUrl}/submit`;  // Endpoint for form submission
    return this.http.post(url, formData);
  }
}
