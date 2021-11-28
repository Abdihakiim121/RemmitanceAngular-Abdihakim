import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  addusers= new FormGroup({
    userid : new FormControl('',[Validators.required]),
    email : new FormControl(''),
    password : new FormControl(''), 
    fullname : new FormControl(''), 
    active : new FormControl('')
  });

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
  }
  addnewusers(){
    console.warn(this.addusers.value);
    this.apiservice.addUsers_API(this.addusers.value)
  }
}
