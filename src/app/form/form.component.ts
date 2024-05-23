import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{

  formData:FormGroup;

  constructor(private fb:FormBuilder,private apiService:ApiService){
    this.formData=this.fb.group({
      date:[],
      nbKilometres:[],
      duree:[],
      avis:[]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit():void{
    this.apiService.submitOuting(this.formData.value).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.error("error");
      }
    )
  }
}
