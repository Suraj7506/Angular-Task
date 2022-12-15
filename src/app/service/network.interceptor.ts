import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize,Observable } from 'rxjs';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor( private api: ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.api.show();
    
    return next.handle(request).pipe(
      finalize(() => {
        this.api.hide();
      })
    );
  }
}
