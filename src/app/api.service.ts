import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
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
  submitOuting(data:any):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new HttpParams()
    .set('date', data.date)
    .set('nbKilometres', data.nbKilometres)
    .set('duree', data.duree)
    .set('avis', data.avis);

    return this.client.post(this.url+"create",body.toString(),{headers});
  }
}
