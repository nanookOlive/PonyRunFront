import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Outing{
  id:number;
  date:string;
  nbKilometres:number;
  duree:number;
  avis:string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //url de l'api
  private url : string = "http://localhost:8080/sortie/"; 

  //injection
  constructor(private client : HttpClient) {}

  //méthode pour fetch une sortie
  getOuting():Observable<any>{
    return this.client.get(this.url+"find/4");
  }

  getAllOutings():Observable<{[key:string]:Outing}>{
    return this.client.get<{[key:string]:Outing}>(this.url+"all");
  }
  dropOuting(id:number):Observable<any>{
    return this.client.delete(this.url+"drop/"+id.toString());
  }
}
