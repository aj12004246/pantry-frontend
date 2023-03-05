import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/Models/Recipe';
import { CentralService } from '../central.service';

@Component({
  selector: 'app-friendrecipes',
  templateUrl: './friendrecipes.component.html',
  styleUrls: ['./friendrecipes.component.css']
})
export class FriendrecipesComponent {


  constructor(public main: CentralService){
    main.getFriendRecipes(main.accountId)
    this.$recipeSub = main.$friendRecipes.subscribe(
      (recipes) => this.recipes = recipes
      )
   }


   public recipes : Recipe[] = []

   public $recipeSub: Subscription


   


}
