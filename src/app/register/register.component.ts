import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CentralService } from '../central.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   constructor(public main: CentralService, public register: RegisterService) {}

   emailFormControl = new FormControl('', [Validators.required, Validators.email]);
   public email=''
   public password=''
   public familyName= ''


}
