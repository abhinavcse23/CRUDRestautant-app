import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url = 'http://localhost:3000/resto';
  regUrl = 'http://localhost:3000/users';
  constructor(private _http:HttpClient) { }

  getResttoList(){ //CRUD in Rest API using Service
   return this._http.get(this.url);   //Read
  }

  addResto(data:any){
    return this._http.post(this.url,data);  //Create
  }

  getCurrentData(id:any){                     //Fetch data to edit or delete it
   return this._http.get(`${this.url}/${id}`)
  }

  updateResto(id:any,data:any){                 //Update
    return this._http.put(`${this.url}/${id}`,data)
  }

  deleteResto(id:any){
    return this._http.delete(`${this.url}/${id}`)
  }

  //Register
  createUser(data:any){
     return this._http.post(this.regUrl,data);
  }
 
  //Login
  loginUser(email:string, password:string){
    return this._http.post(this.regUrl,{
      email:email,
      password:password
    })
  }
}
