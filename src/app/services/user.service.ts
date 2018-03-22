import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
 isLogged(): Promise<boolean> {
   if (typeof(Storage) !== 'undefined') {
     if (sessionStorage.getItem('User')) {
       return Promise.resolve(true);
     }
   }
   return Promise.resolve(false);
 }
  constructor(private http: Http, private router: Router) {
  }

   signUpUser(data: any) {
   const body = JSON.stringify(data);
   const headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.post('http://192.168.1.121:8090/user/registerUser', body,
    { headers: headers }).map((res: Response) => res.json());
  }



  login(data): Observable<boolean> {
    console.log(data);
    return this.http.post('http://192.168.1.121:8090/user/loginemp', data
      ).map(res => res.json());
    
    }
    
    askEmp(data: any) {
      const body = JSON.stringify(data);
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://192.168.1.110:8080/DemoAPI/rest/askq', body,
       { headers: headers }).map((data: Response) => data.json());
   }

  
  deleteEmployee(emailId) {
    console.log(emailId);
    return this.http.post('http://192.168.1.110:8080/DemoAPI/rest/registerEmployee', emailId
      ).map(res => res.json());
  }
    headerUser(data) {
      console.log(data);
      return this.http.post('http://192.168.1.110:8080/DemoAPI/rest/askq', data
      ).map(res => res.json());
    }

    askUser(data:any){
      var body = JSON.stringify(data);
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://192.168.1.111:8080/user/askq', body,
       { headers: headers }).map((data: Response) => data.json());
   }

   contactUser(data:any){
      var body = JSON.stringify(data);
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://192.168.1.111:8090/user/contact' , body,
       { headers: headers }).map((data: Response) => data.json());
   }
   addEmployee(model) {
    console.log(model);
    return this.http.post('http://192.168.1.110:8080/DemoAPI/rest/admin/registerEmployee', model
      ).map(res => res.json());
  }
  
  getEmp(){
    return this.http.get('http://192.168.1.110:8080/DemoAPI/rest/employee').map(res => res.json());
  }
  
  deleteEmp(emailId: any){
    return this.http.delete('http://192.168.1.110:8080/DemoAPI/rest/deleteemp' + emailId)
      .map(res => res.json());
  }

  // Get a list of all events
  getUsers(): Observable <any[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.get('/api/users', options)
      .map(response => response.json().data)
      .catch(this.handleErrors);
   }

  // Error handling
  private handleErrors (error: Response | any) {
    return Observable.throw(error.json().message || 'backend server error');
  }
}
  
  