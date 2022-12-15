import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  items!:any[]
  signupForm !: FormGroup;
  imagecode!: string;

  imageGroup!:FormGroup;
  filePath = '';
  

constructor(private formBuilder : FormBuilder, private router: Router, private http: HttpClient, private fb:FormBuilder) { 

  this.imageGroup = this.fb.group({
    img: [null],
    filename:['']
  });


}

ngOnInit(): void {
 this.signupForm = this.formBuilder.group({
  fullname:['',Validators.required],
  email:['',Validators.required],
  password:['',Validators.required],
  mobile:['',Validators.required],
  hobby: ['',Validators.required, Validators.maxLength(3)]
 })
}

signUp(){
  console.log('in');
  this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
  .subscribe(res=>{
    alert("Signup Successfull");
    this.signupForm.reset();
    this.router.navigate(['login']);

  },err=>{

    alert("Something Went Wrong")

  })
}
  


handleUpload(event: any){
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = ()=>{
    if(reader.result != null)
      this.imagecode = reader.result.toString();
  }

}


public dateValue: Date = new Date("09/09/2022 15:30")
public minDate: Date = new Date("06/06/2022 09:00")
public maxDate: Date = new Date("09/20/2022 18:00")

Clear(){

  this.signupForm.reset();
}

imagePreview(e:any){
  const file = e.target.files[0];

  this.imageGroup.patchValue({
    img: file    //toshowobjectinconsole
  });       

  const reader = new FileReader();
  reader.onload = () => {
    this.filePath = reader.result as string;
  }
  reader.readAsDataURL(file)  //toshowimage
}

public delete(){
this.filePath = '';
}

onSubmit(){
  console.log(this.imageGroup.value);
}

country = [
  { id: 1, name: "Cricket" },
  { id: 2, name: "Football" },
  { id: 3, name: "Volleyball" },
  { id: 4, name: "Hockey" },
  { id: 5, name: "Jumping" },
];

selected = [{ id: 3, name: "England" }];






  }


  











