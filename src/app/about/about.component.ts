import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

loader!: any ;

  constructor(  private api: ApiService ) { 
    this.api.loader.subscribe(res=>{
      this.loader = res;
      console.log(this.api)

    },
    
    
    
    )
    
  }

  ngOnInit(): void {

    setInterval(() => {
      this.getprofileuser(); 
    }, 5000);
   

  }
  getprofileuser() {
    // throw new Error('Method not implemented.');
  }
 

  

  
 
}
