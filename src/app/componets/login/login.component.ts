import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { AlertService} from '../../services/alert.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loading = false;
  // private emailID: string;

// private pwd: string;
data: Object = {};
// private msgs: Message[] = [];

  constructor(
    private authService: UserService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isLogged().then((result: any) => {
      if (result) {
        this.router.navigate(['/home']); 
      }
    });
  }

//   login(data) {
//     this.authService.login(data)
//         .subscribe(
//             data => {
//                 this.router.navigate(['/home']);
//             },
            
//             );
// }
  public login(data){
    this.loading = true;
    this.authService.login(data).subscribe((result: any) => {
      this.router.navigate(['/home']);
      if (result.messageReturn == "Login successfully0") {
        console.log(result.messageReturn);
        if (typeof (Storage) !== 'undefined') {
          sessionStorage.setItem('User', data.emailId);
        }
        // this.router.navigate(['/home']);
     //   alert("Login Successfully")
      }else {
        console.log(result.messageReturn);
      //  alert("Invalid Credentials");
      }
    });
  }
}