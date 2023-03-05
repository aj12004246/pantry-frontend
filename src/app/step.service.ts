import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Step } from 'src/Models/Step';
import { CentralService } from './central.service';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor(public http: HttpClient, public main: CentralService, public item: ItemService) { }

  
  public editedStep: Step = new Step(0,0,'',0,'',0)


  public openEditStep(step: Step): void {
    this.main.showRegister = false
    this.main.showLogin = false
    this.main.showUser = false
    this.main.showPantry = false
    this.main.showUserApply = false
    this.main.showNewItem = false
    this.main.showSteps = false
    this.main.showNewRecipe = false
    this.main. showInviteList = false
    this.main.showFriendRecipes = false
    this.main.showFriendSteps = false
    this.main.showRecipes = false
    this.main.showRecipeSteps = false
    this.main.showFriends =false
    this.main.showReddit= false
    this.main.showEditItem = false
    this.main.showEditStep = true
    this.main.showEditMyStep = false
    this.main.stepId = step.id
    this.editedStep = {
        id: step.id,
        recipeId: step.recipeId,
        description: step.description,
        itemName: step.itemName,
        itemWeight: step.itemWeight,
        itemId: step.itemId    
      };
   
   }


   
  public openEditMyStep(step: Step): void {
    this.main.showRegister = false
    this.main.showLogin = false
    this.main.showUser = false
    this.main.showPantry = false
    this.main.showUserApply = false
    this.main.showNewItem = false
    this.main.showSteps = false
    this.main.showNewRecipe = false
    this.main. showInviteList = false
    this.main.showFriendRecipes = false
    this.main.showFriendSteps = false
    this.main.showRecipes = false
    this.main.showRecipeSteps = false
    this.main.showFriends =false
    this.main.showReddit= false
    this.main.showEditItem = false
    this.main.showEditStep = false
    this.main.showEditMyStep = true
    this.main.stepId = step.id
    this.editedStep = {
        id: step.id,
        recipeId: step.recipeId,
        description: step.description,
        itemName: step.itemName,
        itemWeight: step.itemWeight,
        itemId: step.itemId    
      };
   
   }

   
   
public validateStep(description: string, itemId: number, weight: number, unit: number): void {
  if (description == '' || description == null) {
    this.main.showError('Please Enter Description')
    return
  }
  if (itemId == 0 && (weight > 0 && unit > 0)) {
    this.main.showError('Please enter an Ingredient or make weight empty')
    return
  }
  if (itemId > 0 && (weight == 0 || weight == null || unit == 0 || unit == null)) {
    this.main.showError('Please Enter both weight and unit')
    return
  }
  if (weight > 0 && (unit == 0 || unit == null)) {
    this.main.showError('Please Enter unit')
    return
  }
  if (unit > 0 && (weight == 0 || weight == null)) {
    this.main.showError('Please Enter weight')
    return
  }
  if(itemId == 0 || itemId == null || weight == null || weight == 0 || unit == null || unit == 0) {
    this.submitEEditStep()
  }else{
  this.submitEditStep()
}
}

public submitEEditStep(): void {
  this.http.put(`https://localhost:7263/api/Step/editStep/${this.editedStep.id}`, this.editedStep)
    .pipe(take(1))
    .subscribe({
      next: () => {

        this.main.showError('Step was edited Succesfully')
    
        this.main.openSteps()
    
      },
      error: (err) => {
        if (err.status === 400) {
          this.main.showError('You do not have enough '+ this.editedStep.itemName)
        }
      }
    })
}
  
  public submitEditStep(): void {
    this.http.put(`https://localhost:7263/api/Step/${this.editedStep.itemId}/${this.item.unit}`, this.editedStep)
    .pipe(take(1))
    .subscribe({
      next: () => {

        this.main.showError('Step was edited Succesfully')
    
        this.main.openSteps()
    
      },
      error: (err) => {
        if (err.status === 400) {
          this.main.showError('You do not have enough '+ this.editedStep.itemName)
        }
      }
    })
  }

  
public validateMyStep(description: string, itemId: number, weight: number, unit: number): void {
  if (description == '' || description == null) {
    this.main.showError('Please Enter Description')
    return
  }
  if (itemId == 0 && (weight > 0 && unit > 0)) {
    this.main.showError('Please enter an Ingredient or make weight empty')
    return
  }
  if (itemId > 0 && (weight == 0 || weight == null || unit == 0 || unit == null)) {
    this.main.showError('Please Enter both weight and unit')
    return
  }
  if (weight > 0 && (unit == 0 || unit == null)) {
    this.main.showError('Please Enter unit')
    return
  }
  if (unit > 0 && (weight == 0 || weight == null)) {
    this.main.showError('Please Enter weight')
    return
  }
  if(itemId == 0 || itemId == null || weight == null || weight == 0 || unit == null || unit == 0) {
    this.submitMyEEditStep()
  }else{
  this.submitMyEditStep()
}
}
  
  public submitMyEditStep(): void {
    this.http.put(`https://localhost:7263/api/Step/${this.editedStep.itemId}/${this.item.unit}`, this.editedStep)
    .pipe(take(1))
    .subscribe({
      next: () => {

        this.main.showError('Step was edited Succesfully')
    
        this.main.openRecipeSteps(this.main.recipeId)
    
      },
      error: (err) => {
        if (err.status === 400) {
          this.main.showError('You do not have enough '+ this.editedStep.itemName)
        }
      }
    })
  }

  
public submitMyEEditStep(): void {
  this.http.put(`https://localhost:7263/api/Step/editStep/${this.editedStep.id}`, this.editedStep)
    .pipe(take(1))
    .subscribe({
      next: () => {

        this.main.showError('Step was edited Succesfully')
    
        this.main.openRecipeSteps(this.main.recipeId)
    
      },
      error: (err) => {
        if (err.status === 400) {
          this.main.showError('You do not have enough '+ this.editedStep.itemName)
        }
      }
    })
}


}
