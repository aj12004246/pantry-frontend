import { Component } from '@angular/core';
import { CentralService } from './central.service';
import { StepsComponent } from './steps/steps.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pantry-fe';
  constructor(public main: CentralService){

  }
}
