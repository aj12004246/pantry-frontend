import { Component } from '@angular/core';
import { Item } from 'src/Models/Item';
import { CentralService } from '../central.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent {

  constructor(public main: CentralService, public item: ItemService){}

  public newItem: Item = new Item(0,0,'','',0,0)


}

 


