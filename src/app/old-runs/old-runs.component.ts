import { Component,OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-old-runs',
  templateUrl: './old-runs.component.html',
  styleUrl: './old-runs.component.scss'
})
export class OldRunsComponent implements OnInit {

  //le resultat de la recherche
  data :any;

 constructor(private apiService : ApiService){}

 ngOnInit(){

  this.apiService.getOuting().subscribe(
    (response)=>{
      this.data = response;
    },
    (error)=>{
      console.error('Error');
    }
  );
 
 }
}
