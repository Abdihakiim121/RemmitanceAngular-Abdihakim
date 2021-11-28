import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EdituserComponent } from './edituser/edituser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { CountriesComponent } from './countries/countries.component';
import { UsertableComponent } from './usertable/usertable.component';
import { RemmitanceprocessComponent } from './remmitanceprocess/remmitanceprocess.component';
import { CustomersignupComponent } from './customersignup/customersignup.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'allusers', component: AllusersComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'edituser', component: EdituserComponent },
  { path: 'newuser', component: NewuserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'countries', component: CountriesComponent },
  { path: 'usertable', component: UsertableComponent }, 
  {path: 'remmitanceprocess', component: RemmitanceprocessComponent}, 
  {path: 'customersignup', component:CustomersignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
