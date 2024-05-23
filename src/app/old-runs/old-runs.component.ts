import { Component,OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { Observable } from 'rxjs';

export interface Outing{
  id:number;
  date:string;
  nbKilometres:number;
  duree:number;
  avis:string;
}
@Component({
  selector: 'app-old-runs',
  templateUrl: './old-runs.component.html',
  styleUrl: './old-runs.component.scss'
})
export class OldRunsComponent implements OnInit {

  //le resultat de la recherche
  outings  : {[key:string]:Outing}={}
  

 constructor(private apiService : ApiService){}

 ngOnInit(){


  this.apiService.getAllOutings().subscribe(
    (response)=>{
      this.outings = response;
    },
    (error)=>{
      console.error('Error');
    }
  );
 
 }

 dropOuting(id:number){

  this.apiService.dropOuting(id).subscribe(
    (response)=>{
      this.outings = response;
      this.apiService.getAllOutings().subscribe(
        (response)=>{
          this.outings = response;
        },
        (error)=>{
          console.error('Error');
        }
      );
    },
    (error)=>{
      console.error('Error');
    });

    
 }
 getKeys(obj:{[key:string]:any}):string[]{
  return Object.keys(obj);
 }


}
