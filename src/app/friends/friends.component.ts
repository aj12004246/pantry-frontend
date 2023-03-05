import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Friend } from 'src/Models/Friend';
import { Item } from 'src/Models/Item';
import { CentralService } from '../central.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  constructor(public main: CentralService){
    main.getFriends(main.accountId)
    this.$friendSub = main.$myFriends.subscribe(
      (friends) => this.friends = friends
      )
   }
  

   public friends : Friend[] = []

   public $friendSub: Subscription
}
