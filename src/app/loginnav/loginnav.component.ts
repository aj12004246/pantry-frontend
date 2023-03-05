import { Component } from '@angular/core';
import { CentralService } from '../central.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-loginnav',
  templateUrl: './loginnav.component.html',
  styleUrls: ['./loginnav.component.css']
})
export class LoginnavComponent {

  constructor(public main: CentralService, public register: RegisterService){

  }

}
