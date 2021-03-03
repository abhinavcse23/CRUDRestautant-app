import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { RegisterComponent } from '../register/register.component'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private resto:CommonService, private router:Router, private register:RegisterComponent) { }

  ngOnInit(): void {
   
  
  }

  }
