import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  re: any;

  constructor(private Http: HttpClient) { }

   // All Users Api
  getAllUsers_API(): Promise<any> {
    return new Promise((resolve,reject)=> {
      this.Http.get('http://localhost:3001/database/user/getallusers/')
      .toPromise()
      .then(result =>{
        if (result) {
          resolve(result)
          console.log(result); 
        }
      }).catch(err => {
        reject(err)
      })
    })  
  }

 // All Countries Api
 getAllCountries_API(): Promise<any> {
  return new Promise((resolve,reject)=> {
    this.Http.get('http://localhost:3001/database/shared/getCountries/')
    .toPromise()
    .then(result =>{
      if (result) {
        resolve(result)
        console.log(result); 
      }
    }).catch(err => {
      reject(err)
    })
  })  
}
//   // Add new users to the database
  // AddUsers_API(data: any): Promise<any> {
  //   return new Promise((resolve,reject)=> {
  //     this.Http.get('http://localhost:3001/interface/user/create/', data)
  //     .toPromise()
  //     .then(result =>{
  //       if (result) {
  //         resolve(result)
  //         console.warn('api service waan ku jirnaa libaax.')
  //         console.log(result); 
  //       }
  //     }).catch(err => {
  //       reject(err)
  //     })
  //   })  
  // }

  addUsers_API(data: any){
    console.warn('service');
    return this.Http.post('http://localhost:3001/interface/user/create',data).subscribe((result)=>{
      console.log('Result is here');
    })
  }

 // End of All Countries Api

  login(data: any):Promise<any> {
    console.log('I am a server'); 
    console.log(data);
    
    //return this.Http.post(`http://localhost:3001/database/auth/Login/`,data)
    return new Promise((resolve,reject)=> {
      this.Http.post('http://localhost:3001/database/auth/Login/',data)
      .toPromise()
      .then(result =>{
        if (result) {
          resolve(result)
          console.log(result); 
        }
      }).catch(err => {
        reject(err.error)
      })
    })   

  }
  
  getUserById_API(id: number): Promise<any> {
    return new Promise((resolve,reject)=> {
      this.Http.get('https://jsonplaceholder.typicode.com/users/' +id+ '/posts')
      .toPromise()
      .then(result =>{
        if (result) {
          resolve(result)
          console.log(result); 
        }
      }).catch(err => {
        reject(err)
      })
    })   
  }


  addNewUser(): Promise<any> {

    const param = new HttpParams().set('userId', 100).set('branchId', 253);


    const header = new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Authorization': 'Angular-Training',
      'MyKey' : 'MyValue'
    });
    

    var options = {
      headers: header,
      withCredentials: true,
      params: param
    }

    var body: {
      completed: false
      id: 201
      title: "delectus aut autem"
      userId: 1
    };
    return new Promise<any>((resolve, reject) => {
      this.Http.post('https://jsonplaceholder.typicode.com/todos', body, options)
        .toPromise()
        .then(result => {
          if (result) {
            resolve(result);
          }
        }).catch(err => {
          reject(err)
        });
    });
  }

  postStatus_API(url:any,data:any): Promise<any> {
    return new Promise((resolve,reject)=> {
      this.Http.post(url,data)
      .toPromise()
      .then(result =>{
        if (result) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    })  
  }

  // All post APIS
  getStatus_API(): Promise<any> {
    return new Promise((resolve,reject)=> {
      this.Http.get('http://localhost:3001/v1/oper/status')
      .toPromise()
      .then(result =>{
        if (result) {
          resolve(result)
          this.re = result;
         // console.log(result); 
        }
      }).catch(err => {
        reject(err)
      })
    })  
  }

  // All Get Apis 
  getAll_Apis(url: any): Promise<any> {
    return new Promise((resolve,reject)=> {
      this.Http.get(url)
      .toPromise()
      .then(result =>{
       
          resolve(result)
         
         // console.log(result); 
       
      }).catch(err => {
        reject(err)
      })
    })  
  }
}