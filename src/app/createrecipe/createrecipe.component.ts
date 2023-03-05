import { Component } from '@angular/core';
import { Recipe } from 'src/Models/Recipe';
import { CentralService } from '../central.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-createrecipe',
  templateUrl: './createrecipe.component.html',
  styleUrls: ['./createrecipe.component.css']
})
export class CreaterecipeComponent {

  constructor(public recipe: RecipeService, public main: CentralService){}

  public newRecipe: Recipe = new Recipe(0,0,'','','',[])

}
