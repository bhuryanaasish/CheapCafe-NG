import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyAndPolicyComponent } from './privacy-and-policy/privacy-and-policy.component';
import { PanCardComponent } from './service-forms/pan-card/pan-card.component';
import { IncomeCertificateComponent } from './service-forms/income-certificate/income-certificate.component';
import { CasteCertificateComponent } from './service-forms/caste-certificate/caste-certificate.component';
import { DomicileCertificateComponent } from './service-forms/domicile-certificate/domicile-certificate.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'terms-and-conditions',component: TermsAndConditionsComponent},
  {path: 'privacy-and-policy', component: PrivacyAndPolicyComponent},
  {path: 'services/pan-card', component: PanCardComponent},
  {path: 'services/income-certificate', component: IncomeCertificateComponent},
  {path: 'services/caste-certificate', component: CasteCertificateComponent},
  {path: 'services/domicile-certificate', component: DomicileCertificateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
