import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../shared/api.service';
declare var $:any
@Component({
  selector: 'app-remmitanceprocess',
  templateUrl: './remmitanceprocess.component.html',
  styleUrls: ['./remmitanceprocess.component.css']
})
export class RemmitanceprocessComponent implements OnInit {
  sendForm!: FormGroup
  Sender:  any = []
Reciever:  any = []
rate:any = 1;
res:number = 1;
quantity = 4
currencyCode:any
inputValue: string = "ex";
charge:any 
payment: any 
status: any;
isSubmitted: boolean = false;


  FromValidation(){
    this.sendForm = this.formbuilder.group({
    send: ['',Validators.required],
    recieve:  ['',Validators.required],
    amount:  ['',Validators.required],
    convertedamount:  ['',Validators.required],
    payment:  ['',Validators.required], 
    status:  ['',Validators.required],
    charge: ['',Validators.required]
    })
  }
  constructor(private apiservice: ApiService,
    private formbuilder: FormBuilder, 
    private authService:AuthService, 
    private route : Router
     ) { }


  ngOnInit(): void {
    if (!this.authService.isUserLogin()){
      this.route.navigateByUrl('/')
      return;
    }

    this.FromValidation()
      this.apiservice.getAll_Apis('http://localhost:3001/database/remittance/getCustomers')
      .then(result=>{
        console.log(result);
        this.Sender = result;
        
      })
      this.getpayment();
      this.getstatus();
  }

     getreciever(id:any){
    console.log(id);
    this.apiservice.getAll_Apis('http://localhost:3001/database/remittance/getCustomer/'+id+'/equal4')
    .then(result => {
      this.Reciever = result    
    })
  }

  getinfo(id:any){
    this.apiservice.getAll_Apis('http://localhost:3001/database/remittance/getCustomer/'+id+'/equal')
    .then(result => {
      console.warn(result);
      this.rate = result.data[0].RATES; 
      console.warn(this.rate)
      this.currencyCode = result.data[0].CURRENCY_CODE    
      console.warn(this.currencyCode);
      
    })
  }

  onKey(event:any) { // without type info
   const val = event.target.value;
   this.res = val*parseFloat(this.rate);
   this.sendForm.controls['convertedamount'].setValue(this.res);
   //alert(this.rate)
   this.charge = val*0.05;
  this.sendForm.controls['charge'].setValue(this.charge)

  
  }

  getpayment() {
    this.apiservice.getAll_Apis('http://localhost:3001/database/shared/getpayments')
    .then(result => {
      this.payment = result;
      console.log(result);       
    })  
  }
 
  getstatus() {
    this.apiservice.getAll_Apis('http://localhost:3001/database/shared/status')
    .then(result => {
      this.status = result;
      console.log(result);
      
    })  
  }

  sendmoney(){
    this.isSubmitted= true
    if(this.sendForm.valid){
      console.log(this.sendForm.value);
      this.apiservice.postStatus_API('http://localhost:3001/database/remittance/createRemittance',this.sendForm.value)
      .then(result => {
        console.log(result);
  
      })

    }else{
      console.log('no');
      
    }
   
  }

}
