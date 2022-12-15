import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {


  title = "Users Data "

  users: any;

  constructor(private api: ApiService) {
    api.signupUsers().subscribe((data=>{
      console.log("data",data);
      this.users=data;
    }))
   }

  ngOnInit(): void {
  }

}
