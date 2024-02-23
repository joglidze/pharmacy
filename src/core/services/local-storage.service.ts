import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  
  setlocalStorage(token: string) {
    console.log(token);
    localStorage.setItem('token', token);
  }
 static  getlocalStorage() {
   return localStorage.getItem('token');
  }
}
