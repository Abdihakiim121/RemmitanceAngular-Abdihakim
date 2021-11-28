import { Component, OnInit } from '@angular/core';
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
  
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.getCountries();
     
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

}


