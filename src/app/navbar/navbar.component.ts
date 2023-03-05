import { Component } from '@angular/core';
import { CentralService } from '../central.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


   constructor(public main: CentralService,public register: RegisterService){}


}
