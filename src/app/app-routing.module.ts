import { Comp2Component } from './Loader/comp2/comp2.component';
import { Comp1Component } from './Loader/comp1/comp1.component';
import { AllusersComponent } from './allusers/allusers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

{ path:'login', component: LoginComponent},
{ path:'signup', component: SignupComponent},
{ path:'home', component: HomeComponent},
{ path:'contact', component: ContactComponent},
{ path:'about', component: AboutComponent},
{ path:'allusers', component: AllusersComponent},
{ path:'comp1', component: Comp1Component},
{ path: 'comp2', component: Comp2Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
