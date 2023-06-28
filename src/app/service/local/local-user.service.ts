import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalUserService {

  constructor() { }
  private Store = localStorage;
  
  set(key: string, data: any){
    try {
      this.Store.setItem(key, JSON.stringify(data))
      return true;
    } catch (error) {
      return false
    }
  }
  get(key: string){
    try {
      const response = JSON.parse(this.Store.getItem(key) ?? '')
      return{
        status: true,
        data: response
      }
    } catch (error) {
      return{
        status: true,
        data: null
      }
    }
  }
}
