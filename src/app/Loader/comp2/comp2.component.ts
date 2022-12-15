import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  product: any;
  off: number = 0;
  arr: any = [];
  end: boolean = false;
  spin=true
  notemptypost: boolean = true;
  notscrolly: boolean = true;
  users: any;
  suraj : any;
  displayData: any;

  constructor(public api: ApiService, private spinner: NgxSpinnerService, private http: HttpClient, private user: UserService) {
    api.hello().subscribe((data=>{
      console.log("data",data);
      this.users=data;
    }))

    // api.hello().subscribe((data=>{
    //   console.log("data",data);
    //   this.suraj = data;
    // }))


  }
  
  ngOnInit(): void {
    
  
  
  }
  
 
  
      
  getprofileuser(){
    this.api.getProfile().subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
      this.spin = false
  
    })
  }

  loading$ = this.api.loading$;

  fetchUser() {
    this.http
      .get('https://api.github.com/users/thisiszoaib')
      .subscribe((res) => {
        console.log(res);
      });
  
    }

    destroy(){
      
    }
    
    showdata(){
      // setTimeout(()=>{
        this.api.getProfile().subscribe((res)=>{
          this.displayData = res;
        });
      // },2000)

    }

    show(){
      // this.api.show()
      this.api.getComments().subscribe((res)=>{
        this.suraj = res;
      });

      

    }

    hello2(){
      this.user.tort();
    }


  
}
