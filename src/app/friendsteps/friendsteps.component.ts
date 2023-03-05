import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Step } from 'src/Models/Step';
import { CentralService } from '../central.service';

@Component({
  selector: 'app-friendsteps',
  templateUrl: './friendsteps.component.html',
  styleUrls: ['./friendsteps.component.css']
})
export class FriendstepsComponent {

  constructor(public main: CentralService, public http: HttpClient){
    main.getFRecipeSteps(main.accountId, main.recipeId)
      this.$stepsSub = main.$friendSteps.subscribe(
        (steps) => this.steps = steps
        )
  }




public steps: Step[] =[]

  public $stepsSub: Subscription
}
