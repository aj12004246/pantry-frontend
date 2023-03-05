import { Component } from '@angular/core';
import { Item } from 'src/Models/Item';
import { CentralService } from '../central.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent {

  constructor(public main: CentralService, public item: ItemService){}




}
