import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllusersComponent } from './allusers/allusers.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';
import { EdituserComponent } from './edituser/edituser.component';
import { NewuserComponent } from './newuser/newuser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { CountriesComponent } from './countries/countries.component';
import { UsertableComponent } from './usertable/usertable.component';
import { RemmitanceprocessComponent } from './remmitanceprocess/remmitanceprocess.component';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { AllremittanceComponent } from './allremittance/allremittance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllusersComponent,
    HomeComponent,
    ContactusComponent,
    EdituserComponent,
    NewuserComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    CountriesComponent,
    UsertableComponent,
    RemmitanceprocessComponent,
    CustomersignupComponent,
    AllCustomersComponent,
    AllremittanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
