import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterInternComponent } from './auth/register.intern/register.intern.component';
import { RegisterRecruiterComponent } from './auth/register.recruiter/register.recruiter.component';
import { HomepageInternComponent } from './intern/homepage.intern/homepage.intern.component';
import { HomepageRecruiterComponent } from './recruiter/homepage.recruiter/homepage.recruiter.component';
import { ProfileInternComponent } from './intern/profile.intern/profile.intern.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'landing-page', component: LandingPageComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register-intern', component: RegisterInternComponent},
    { path: 'register-recruiter', component: RegisterRecruiterComponent},
    { path: 'homepage-intern', component: HomepageInternComponent},
    { path: 'homepage-recruiter', component: HomepageRecruiterComponent},
    { path: 'internprofile', component:ProfileInternComponent},


];
