import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { Item } from 'src/Models/Item';
import { Step } from 'src/Models/Step';
import { CentralService } from '../central.service';
import { ItemService } from '../item.service';
import { StepService } from '../step.service';

@Component({
  selector: 'app-editstep',
  templateUrl: './editstep.component.html',
  styleUrls: ['./editstep.component.css']
})
export class EditstepComponent {

  constructor(public http: HttpClient, public main: CentralService, public item: ItemService, public step: StepService){
  }

  



}
