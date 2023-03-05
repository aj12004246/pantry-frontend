import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, Subscription, take } from 'rxjs';
import { Account } from 'src/Models/Account';
import { User } from 'src/Models/User';
import { CentralService } from '../central.service';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
     constructor(public main: CentralService, public friend: FriendService, public http: HttpClient){
      main.getAllUsers(main.accountId)
      this.$usersSub = main.$users.subscribe(
        (users) => this.users = users
        )
        main.getAllAccounts(main.accountId)
        this.$accountsSub = main.$accounts.subscribe(
          (accounts) => this.accounts = accounts
          )
     }


     public FriendId = 0

    public accounts: Account[] =[]

    public $accountsSub: Subscription

     public users : User[] = []

     public $usersSub: Subscription

     
  
  
  public validateFriend(friendId: number): void {
    if ( friendId == 0 || friendId == null) {
      this.main.showError('Please Selsect a Family to Add')
      return
    }

    this.submitFriend(friendId)
  }



  
  public submitFriend(friendId: number): void {
    this.http.post("https://localhost:7263/api/Friend",
      {       
        accountId: this.main.accountId,
        friendId: friendId,
        name : '',
        myFriend: true,
        isFriend:false,
        friendRecipes: []
      }
    )
      .pipe(take(1))
      .subscribe({
        next: (acc) => {
          this.main.showError("Invite Sent")
        },
        error: (err) => {
          if (err.status === 400) {
            this.main.showError('Friend Request already sent!')
          }
        }
      })
  }



}
