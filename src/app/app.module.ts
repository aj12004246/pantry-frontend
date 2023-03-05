import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatStepperModule} from '@angular/material/stepper';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PantryComponent } from './pantry/pantry.component';
import { UserapplyComponent } from './userapply/userapply.component';
import { AdditemComponent } from './additem/additem.component';
import { CreaterecipeComponent } from './createrecipe/createrecipe.component';
import { StepsComponent } from './steps/steps.component';
import { NewrecipeComponent } from './newrecipe/newrecipe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InvitelistComponent } from './invitelist/invitelist.component';
import { FriendrecipesComponent } from './friendrecipes/friendrecipes.component';
import { FriendstepsComponent } from './friendsteps/friendsteps.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { MystepsComponent } from './mysteps/mysteps.component';
import { FriendsComponent } from './friends/friends.component';
import { LoginnavComponent } from './loginnav/loginnav.component';
import { RedditComponent } from './reddit/reddit.component';
import { EdititemComponent } from './edititem/edititem.component';
import { EditstepComponent } from './editstep/editstep.component';
import { EditmystepComponent } from './editmystep/editmystep.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    PantryComponent,
    UserapplyComponent,
    AdditemComponent,
    CreaterecipeComponent,
    StepsComponent,
    NewrecipeComponent,
    NavbarComponent,
    InvitelistComponent,
    FriendrecipesComponent,
    FriendstepsComponent,
    RecipelistComponent,
    MystepsComponent,
    FriendsComponent,
    LoginnavComponent,
    RedditComponent,
    EdititemComponent,
    EditstepComponent,
    EditmystepComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatDividerModule,
    MatBadgeModule,
    MatStepperModule,
    MatMenuModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
