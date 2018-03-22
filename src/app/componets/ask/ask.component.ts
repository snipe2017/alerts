import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit,Inject  } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import { Router }  from '@angular/router';
import { UserService } from '../../services/user.service'
import 'rxjs/Rx';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
  
  })
export class AskComponent implements OnInit {

  form: FormGroup;
  successMessage:string = '';
  errorMessage:string = '';
  
 constructor(private fb: FormBuilder,private userService : UserService, private router: Router){}
  ngOnInit() {
     
     this.form = this.fb.group({    
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+'), Validators.maxLength(10)]],
     tag: ['',[Validators.required,] ],
      question: ['',[Validators.required, Validators.maxLength(200)] ],
      });
    
  }
 isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }
  
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }  


  validateAllFormFields(form: FormGroup) {         //{1}
  Object.keys(form.controls).forEach(field => {  //{2}
    const control = form.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}

 
  
 
    
  ask() {
    this.successMessage = '';  
   this.errorMessage = '';
   console.log(this.form.value);
   if (this.form.valid) {
    console.log('form submitted');
  } else {
    this.validateAllFormFields(this.form);
  }
    this.userService.askUser(this.form.value)
    .subscribe( 
      (form) => { console.log(form);
    this.successMessage ='you will get an answer soon!!!.';
      },       
      (error) => {console.log(error)
        this.errorMessage = 'question could not be updated';
      },
      () => console.log('success')  
    );
  }
  
}








