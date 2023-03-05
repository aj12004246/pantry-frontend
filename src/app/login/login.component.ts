import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CentralService } from '../central.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public main: CentralService, public register: RegisterService) {}
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public email=''
  public password=''
 

  
}
