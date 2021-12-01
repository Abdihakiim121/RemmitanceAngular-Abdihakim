import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-customersignup',
  templateUrl: './customersignup.component.html',
  styleUrls: ['./customersignup.component.css']
})
export class CustomersignupComponent implements OnInit {
  countries: any =[];
  states: any =[];
  countryid :any;
  city: any = [];
  customername: any; 
  phone : any;
  signupForm!:FormGroup
  isSubmitted: boolean = false;
  
  constructor(private apiservice: ApiService,private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValidation()
    this.getCountries();
     
  }
  formValidation(){
    this.signupForm = this.formbuilder.group({
      customername: ['',Validators.required],
      phone: ['',Validators.required],
      country: ['',Validators.required],
      state: ['',Validators.required],
      city: ['',Validators.required]
    })
  }

  getCountries() {
    this.apiservice.getAll_Apis('http://localhost:3001/database/shared/getCountries')
    .then(result => {
      this.countries = result;
      console.log(result);  
      console.warn(this.countries.data)


    })  
  }

  getstates(id:any) {
        console.warn('This is the Country ID',id)
        this.countryid = id;
        // console.log(this.StateCity = id);
        
        // console.warn('i have here the values of country id ',this.countryid)
    this.apiservice.getAll_Apis('http://localhost:3001/database/shared/getstate/'+id)
    .then(result => {
      this.states = result;
      console.log(result);       
    })  
  }

  getCities(stateid: any ){
    
    this.apiservice.getAll_Apis('http://localhost:3001/database/shared/'+this.countryid+'/'+stateid)
    .then(result =>{
      this.city = result
     console.warn('All Result is'+ result);
    })

  }

  getinfo(id:any){
    this.apiservice.getAll_Apis('http://localhost:3001/database/remittance/getCustomer/'+id+'/equal')
    .then(result => {
       this.states =result;
      console.log(this.states);
      
    })
  }

  submitSingup(){
    this.isSubmitted = true
    console.log(this.signupForm.value);
    
    this.apiservice.postStatus_API('http://localhost:3001/database/customer/createCustomers',this.signupForm.value)
      .then(result => {
        console.log(result);
        
      })
    }

}


