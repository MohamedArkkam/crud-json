import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  
  empform:FormGroup;
  
  education: string[]=[
    'HSE',
    'Diploma',
    'Intermediate',
    'UnderGraduate',
    'PostGraduate'
  ]
   ngOnInit(): void {
     
   }
  constructor( private fb:FormBuilder){

    this.empform=this.fb.group({
      firstName: '',      
      lastName: '',      
      email: '',      
      dob: '',      
      gender: '',      
      education: '',      
      company: '',      
      experience: '',      
      package: '',
    });
    
  }
  formsubmit(){
    if(this.empform.valid){
      console.log(this.empform.value)
    }
  }
}
