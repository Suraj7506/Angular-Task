import { ApiService } from 'src/app/service/api.service';
import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpEventType } from '@angular/common/http';
import { finalize,Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable( )
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private api: ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log(request)
    
    if(!request.url.includes('/users/thisiszoaib') && !request.url.includes('/profile')){
      this.api.show();
    }
    return next.handle(request).pipe(
      finalize(() => {
        setTimeout(()=>{
        this.api.hide();
       
      },4000)

      

      })
    
      
    );
  
  }
  

}


