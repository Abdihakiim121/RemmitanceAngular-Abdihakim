import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  isLoading: boolean = true;

  allUsers: any = []
  constructor(private apiServices: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.apiServices.getAllUsers_API()
    .then(result => {
      this.isLoading = false
      this.allUsers = result
      console.log(result);
      
    }).catch(err => {
      this.isLoading = false
      console.log(err);
      (err)
    })
  }

  viewUser(user: any) {
    this.route.navigateByUrl('edituser?id=' + user.id)
    // this.apiServices.getUserById_API(user.id)
    // .then(result =>{
    //   console.log(result);
      
    // }) 
  }

  addUser() {
    // this.route.navigateByUrl('newuser?='+user)
    this.apiServices.addNewUser()
    .then(result => {
      console.log(result);
      
    })
  }
}
