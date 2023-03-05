import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { Recipe } from 'src/Models/Recipe';
import { CentralService } from '../central.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent {
  constructor(public main: CentralService, public http: HttpClient){
    main.getAllRecipes(main.accountId)
    this.$recipeSub = main.$recipes.subscribe(
      (recipes) => this.recipes = recipes
      )
   }


   public recipes : Recipe[] = []

   public $recipeSub: Subscription

   
   public deleteRecipe(id: number): void{
    this.http.delete(`https://localhost:7263/api/Recipe/${id}`) 
    .pipe(take(1))
    .subscribe({
      next: () => {
        this.main.showError("Successfully Deleted")
        this.main.getAllRecipes(this.main.accountId)
      },
      error: () => console.log("err")
    })
   }
}
