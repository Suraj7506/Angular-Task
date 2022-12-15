import { NetworkInterceptor } from './service/network.interceptor';
import { DateTimePickerModule, MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgToastModule } from 'ng-angular-popup';
import { AllusersComponent } from './allusers/allusers.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Comp1Component } from './Loader/comp1/comp1.component';
import { Comp2Component } from './Loader/comp2/comp2.component';
import { LoaderInterceptor } from './service/loader.interceptor';
import { InfiniteScrollModule} from 'ngx-infinite-scroll';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'  
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    AllusersComponent,
    Comp1Component,
    Comp2Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSelectModule,
    RouterModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatCheckboxModule ,
    MatCardModule,
    MatButtonModule,
    DateTimePickerModule,
    NgToastModule,
    NgSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    NgxSkeletonLoaderModule,
    NgxSkeletonLoaderModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule

  ],
  providers: [
    MaskedDateTimeService,
    {
      provide: HTTP_INTERCEPTORS, useClass :LoaderInterceptor, multi: true,   //Multi: true means that one provider token provides an array of elements

              //Angular Providers allows us to register classes, functions, or values (dependencies) with the Angular Dependency Injection system
    }
  //Use the Class Provider useClass , when you want to provide an instance of the provided class. The useClass expects us to provide a type.
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


// Some commonly used predefined Angular pipes are: 
