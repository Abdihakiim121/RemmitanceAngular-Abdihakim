import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
    allCountries: any =[];
  constructor(private apiServices:ApiService, 
    private authService:AuthService,
     private route:Router

    ) { }

  ngOnInit(): void {

    if (!this.authService.isUserLogin()){
      this.route.navigateByUrl('/')
      return;
    }
    this.getAllCountries();
    // this.apidata.getAllCountries_API()
    // .then(result => {
    //  // this.isLoading = false
    //   this.allCountries = result
    //   console.log(result);
      
    // }).catch(err => {
    //  // this.isLoading = false
    //   console.log(err);
    //   (err)
    // })
  }

  getAllCountries() {
    this.apiServices.getAll_Apis('http://localhost:3001/database/shared/getCountries')
    .then(result => {
      this.allCountries = result;
      console.log(result);       
    }).catch(error => {
      alert (error.message)
    })
  }


}
