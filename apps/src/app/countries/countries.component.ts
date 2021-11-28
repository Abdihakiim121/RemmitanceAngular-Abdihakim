import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
    allCountries: any =[];
  constructor(private apidata:ApiService) { }

  ngOnInit(): void {
    this.apidata.getAllCountries_API()
    .then(result => {
     // this.isLoading = false
      this.allCountries = result
      console.log(result);
      
    }).catch(err => {
     // this.isLoading = false
      console.log(err);
      (err)
    })
  }

}
