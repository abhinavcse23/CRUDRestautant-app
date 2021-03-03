import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean =false;

  createUser = new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  })

  constructor(private resto:CommonService) { }

  ngOnInit(): void {

  }

  regUser(){
    //console.log(this.createUser.value);
    this.resto.createUser(this.createUser.value).subscribe((result)=>{
      console.log(result,"data created successfully");

      this.alert = true
    })
  }

  closeAlert(){
    this.alert = false;
  }

}
