import { Component } from '@angular/core';
import { CentralService } from '../central.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userapply',
  templateUrl: './userapply.component.html',
  styleUrls: ['./userapply.component.css']
})
export class UserapplyComponent {

  constructor(public main: CentralService, public user: UserService){}

  public name = ''

}
