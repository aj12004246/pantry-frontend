import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { BehaviorSubject, Subscription, take } from 'rxjs';
import { Item } from 'src/Models/Item';
import { Step } from 'src/Models/Step';
import { CentralService } from '../central.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent {

constructor(public main: CentralService, public http: HttpClient){
  main.getAllItems(main.accountId)
  this.$itemsSub = main.$items.subscribe(
    (items) => this.items = items
    )
}


  
  public description= ''
  public itemId= 0
  public weight= 0
  public unit = 0
  public errorOccured: boolean = false;

 
 
  public items : Item[] = []

  public $itemsSub: Subscription


public validateStep(recipeId: number, description: string, itemId: number, weight: number, unit: number, stepper: MatStepper): void {
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
    this.submitEStep(recipeId, description)
  }else{
    this.submitStep(recipeId, description, itemId, weight, unit)
  }
  if(!this.errorOccured){
    this.description = '';
    this.itemId = 0;
    this.weight = 0;
    this.unit = 0;
    stepper.reset()
  }
  this.main.getNewSteps(this.main.recipeId)
}




public submitEStep(recipeId: number, Description: string): void {
  this.http.post<Step>(`https://localhost:7263/api/Step/addStep/${recipeId}`,
  {       
    recipeId: recipeId,
    description: Description,
    itemId: null,
    itemName: null,
    itemWeight: null
  }
)
  .pipe(take(1))
  .subscribe({
    next: () => {
      this.main.getNewSteps(this.main.recipeId)
      this.main.showError("What's the next step")
    },
    error: (err) => {
      if (err.status === 409) {
        this.main.showError('Step already exists !')
      }
    }
  })
 }

 
 public submitStep(recipeId: number, description: string,itemId: number, weight: number, unit : number): void {
  this.http.post<Step>(`https://localhost:7263/api/Step/addStep/${recipeId}/${itemId}/${weight}/${unit}`,
  {       
    recipeId: recipeId,
    description: description,
    itemId: 0,
    itemName: '',
    itemWeight: weight
  }
)
  .pipe(take(1))
  .subscribe({
    next: () => {
      this.main.getNewSteps(this.main.recipeId)
      this.main.showError("What's the next step")
    },
    error: (err) => {     
     if(err.status === 400 ){
        this.main.showError("Please redo step, you don't have enough of that Ingredient")
        this.errorOccured = true;
        console.log(this.errorOccured)
      }
    }
  })
 }

 
  

}
