import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm! : FormGroup
  
  
  constructor(private formBuilder : FormBuilder,private http: HttpClient,private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['', Validators.required]
    
    
    })
  }

  Clear(){
    this.loginForm.reset()
  }

  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{

      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        // alert(res.message);
        this.toast.success({detail:"Success Message",summary:"Login Successfull",duration:5000})
        this.loginForm.reset();
        this.router.navigate(['home']);
      }else{
        this.toast.error({detail:"Error Message",summary:"Login Failed, Try again later !!",duration:5000})
      }
      },err=>{
       this.toast.error({detail:"Error Message",summary:"Login Failed, Try again later !!",duration:5000})


    })
  }

  
  
  }
  


