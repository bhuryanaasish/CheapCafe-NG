import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyAndPolicyComponent } from './privacy-and-policy/privacy-and-policy.component';
import { ServicesComponent } from './services/services.component';
import { PanCardComponent } from './service-forms/pan-card/pan-card.component';
import { IncomeCertificateComponent } from './service-forms/income-certificate/income-certificate.component';
import { CasteCertificateComponent } from './service-forms/caste-certificate/caste-certificate.component';
import { DomicileCertificateComponent } from './service-forms/domicile-certificate/domicile-certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AboutUsComponent,
    TermsAndConditionsComponent,
    PrivacyAndPolicyComponent,
    ServicesComponent,
    PanCardComponent,
    IncomeCertificateComponent,
    CasteCertificateComponent,
    DomicileCertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
