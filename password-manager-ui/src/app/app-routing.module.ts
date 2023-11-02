import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'login', component: LoginPageComponent },
  // {path: 'registration', component: RegistrationComponent },
  {path: 'login', component: LoginPageComponent },
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
