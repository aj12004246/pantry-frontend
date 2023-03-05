import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { Account } from 'src/Models/Account';
import { CentralService } from './central.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http: HttpClient, public main: CentralService) {
    const username = localStorage.getItem('email')
    const password = localStorage.getItem('password')

    if(username !== null && password !== null){
        this.submitLogin(username,password)
    }
   }
    
 
  public validateEmail(checkEmail: string){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(checkEmail); 
  } 


  public validateRegister(email: string, password: string, familyName: string): void {
    if (email == '' || email == null) {
      this.main.showError('Email Required')
      return
    }
    if (password == '' || password == null) {
      this.main.showError('Password Required')
      return
    }
    if (familyName == '' || familyName == null) {
      this.main.showError('Family Name Type')
      return
    }
    if (this.validateEmail(email) === false){
      this.main.showError('Email does not meet requirements Ex: Example@example.com')
      return
    }

    this.submitRegister(email, password, familyName)
  }


  private submitRegister(email: string, password: string, name: string): void {
    this.http.post("https://localhost:7263/api/Account",
      {       
        email,
        password,
        name,
        users: [],
        friends: [],
        items: [],
        recipes: []
      }
    )
      .pipe(take(1))
      .subscribe({
        next: () => {

          this.main.showError('Registered Successfully! Please Login!')
          this.main.openLogin()
        },
        error: (err) => {
          if (err.status === 409) {
            this.main.showError('Email already exists !')
          }
        }
      })
  }


  public validateLogin(email: string, password: string): void {
    if (email == '' || email == null) {
      this.main.showError('Enter Email')
      return
    }
    if (password == '' || password == null) {
      this.main.showError('Enter Password')
      return
    }
    this.submitLogin(email, password)
  }


  private submitLogin(email: string, password: string): void {
    this.http.get<Account>(`https://localhost:7263/api/Account/${email}/${password}`)
      .pipe(take(1))
      .subscribe({
        next: acc => {
          this.main.familyName = acc.name
          console.log(this.main.familyName)
          this.main.accountId = acc.id
          this.LoginSuccess()
          localStorage.setItem("email", email)
          localStorage.setItem("password", password)
        },
        error: err => {
          this.main.showError("Email or Password Incorrect !")
        }
      })
  }


  public LoginSuccess(): void {
    this.main.openUser()
    this.main.isLoggedIn = true
   
  }

  public LogoutSuccess(): void {
    this.main.logout()
    localStorage.clear()
  }


}
