import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Recipe } from 'src/Models/Recipe';
import { CentralService } from './central.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public main: CentralService, public http: HttpClient) { }
  



  public submitRecipe(accountId: number, name: string, img: string ): void {
    this.http.post<Recipe>(`https://localhost:7263/api/Recipe/addRecipe/${accountId}`,
    {  
      accountId: accountId,
      userName: this.main.userName,    
      name: name,
      img: img,
      ingredients: [],
      steps: []
    }
  )
    .pipe(take(1))
    .subscribe({
      next: (rec) => {
        this.main.showError('Please show the steps to your recipe')
         this.main.recipeId = rec.id
        this.main.openSteps()
      },
      error: (err) => {
        if (err.status === 400) {
          this.main.showError('Recipe Name already exists!')
        }
      }
    })
  }





  public validateRecipe(accountId: number, name: string, img: string): void {
    if (name == '' || name == null) {
      this.main.showError("Enter The Recipe's Name")
      return
    }
    if (img == '' || img == null) {
      this.main.showError('Enter The Image Url')
      return
  }
  this.submitRecipe(accountId, name, img)
}

}