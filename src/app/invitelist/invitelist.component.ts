import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { Account } from 'src/Models/Account';
import { Friend } from 'src/Models/Friend';
import { CentralService } from '../central.service';

@Component({
  selector: 'app-invitelist',
  templateUrl: './invitelist.component.html',
  styleUrls: ['./invitelist.component.css']
})
export class InvitelistComponent {
   

    constructor(public main: CentralService, public http: HttpClient){
      main.getInviteList(main.accountId)
        this.$invitesSub = main.$friends.subscribe(
          (invites) => this.invites = invites
          )
    }




  public invites: Friend[] =[]

    public $invitesSub: Subscription

    public acceptFriend(id: number, friendId: number): void {
      this.http.post<Friend>(`https://localhost:7263/api/Friend/acceptFriend/${id}/${friendId}`, { id: id, friendId: friendId},)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.main.getInviteList(this.main.accountId)
            this.main.showError('accepted friend request')
          },
          error: (err) => {
            if (err.status === 400 ) {
              this.main.showError("Account is already a friend")
            }
          }
        })
    }

    public rejectFriend(id: number, friendId: number): void {
      this.http.delete<Friend>(`https://localhost:7263/api/Friend/rejectFriend/${id}/${friendId}`)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.main.getInviteList(this.main.accountId)
            this.main.showError('rejected friend request')
          },
          error: (err) => {
            if (err.status === 400 ) {
              this.main.showError("Account is already a friend")
            }
          }
        })
    }
  
}
