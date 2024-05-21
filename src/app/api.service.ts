import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //url de l'api
  private url : string = "http://localhost:8080/sortie/find/4"; 

  //injection
  constructor(private client : HttpClient) {}

  //méthode pour fetch une sortie
  getOuting():Observable<any>{
    return this.client.get(this.url);
  }
}
