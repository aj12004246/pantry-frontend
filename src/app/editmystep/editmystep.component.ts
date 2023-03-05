import { Component } from '@angular/core';
import { CentralService } from '../central.service';
import { ItemService } from '../item.service';
import { StepService } from '../step.service';

@Component({
  selector: 'app-editmystep',
  templateUrl: './editmystep.component.html',
  styleUrls: ['./editmystep.component.css']
})
export class EditmystepComponent {
constructor(public man: CentralService, public step: StepService, public item: ItemService){}
}
