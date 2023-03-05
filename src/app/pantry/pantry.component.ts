import { DEFAULT_RESIZE_TIME } from '@angular/cdk/scrolling';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { Item } from 'src/Models/Item';
import { User } from 'src/Models/User';
import { CentralService } from '../central.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent {

  constructor(public http: HttpClient, public main: CentralService, public itemss: ItemService){
    main.getAllItems(main.accountId)
    this.$itemSub = main.$items.subscribe(
      (items) => this.items = items
      )
   }
  
   public hover: boolean = false

   public items : Item[] = []

   public $itemSub: Subscription


   public deleteItem(id: number): void{
    this.http.delete(`https://localhost:7263/api/Item/${id}`) 
    .pipe(take(1))
    .subscribe({
      next: () => {
        this.main.showError("Successfully Deleted")
        this.main.getAllItems(this.main.accountId)
      },
      error: () => console.log("err")
    })
   }
}
