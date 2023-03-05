import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { Step } from 'src/Models/Step';
import { CentralService } from '../central.service';
import { StepService } from '../step.service';
import { StepsComponent } from '../steps/steps.component';

@Component({
  selector: 'app-newrecipe',
  templateUrl: './newrecipe.component.html',
  styleUrls: ['./newrecipe.component.css']
})

export class NewrecipeComponent {

  constructor(public http: HttpClient, public main: CentralService, public stepss: StepService){
    main.getNewSteps(main.recipeId)
    this.$stepSub = main.$steps.subscribe(
      (steps) => this.steps = steps
      )
   }
  

   public steps : Step[] = []

   public $stepSub: Subscription

   
   public deleteStep(id: number): void{
    this.http.delete(`https://localhost:7263/api/Step/${id}`) 
    .pipe(take(1))
    .subscribe({
      next: () => {
        this.main.showError("Successfully Deleted")
        this.main.getSteps(this.main.recipeId)
      },
      error: () => console.log("err")
    })
   }



}
