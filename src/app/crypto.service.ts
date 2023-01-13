import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {catchError,map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  base_url="http://127.0.0.1:3000/crypto"
  constructor(private http:HttpClient) {
    
   }

   createCrypto(data:any):Observable<any>{
    return this.http.post(this.base_url,data)
   }
}
