import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { Step } from 'src/Models/Step';
import { CentralService } from '../central.service';
import { StepService } from '../step.service';

@Component({
  selector: 'app-mysteps',
  templateUrl: './mysteps.component.html',
  styleUrls: ['./mysteps.component.css']
})
export class MystepsComponent {

  constructor(public http: HttpClient, public main: CentralService, public stepss: StepService){
    main.getSteps(main.recipeId)
    this.$stepSub = main.$mySteps.subscribe(
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
