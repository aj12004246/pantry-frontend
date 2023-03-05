import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { User } from 'src/Models/User';
import { CentralService } from './central.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public main: CentralService, public http: HttpClient) { }

 

  public userId = 0
   
  public submitUser(AccountId: number, Name: string): void {
    this.http.post<User>(`https://localhost:7263/api/User/addUser/${AccountId}`,
      {       
        AccountId,
        Name,
      }
    )
      .pipe(take(1))
      .subscribe({
        next: (user) => {

          this.main.showError('Registered Successfully! Please Select Your Account!')
          this.main.openUser()
        },
        error: (err) => {
          if (err.status === 409) {
            this.main.showError('User already exists !')
          }
        }
      })
  }

  
  
  public validateUser(accountId: number, name: string): void {
    if (name == '' || name == null) {
      this.main.showError('Please Enter Your Name')
      return
    }
    this.submitUser(accountId,name)
  }








}
