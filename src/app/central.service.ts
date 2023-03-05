import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, take } from 'rxjs';
import { Account } from 'src/Models/Account';
import { Friend } from 'src/Models/Friend';
import { Item } from 'src/Models/Item';
import { Pantry } from 'src/Models/Pantry';
import { Recipe } from 'src/Models/Recipe';
import { Step } from 'src/Models/Step';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class CentralService {
constructor(public snackBar: MatSnackBar, public http: HttpClient) 
{
  
}

  public showRegister: boolean = false
  public showLogin: boolean = true
  public showUser: boolean = false
  public showPantry: boolean = false
  public showUserApply: boolean = false
  public showNewItem: boolean = false
  public showSteps: boolean = false
  public showNewRecipe: boolean = false
  public showInviteList: boolean = false
  public showFriendRecipes: boolean = false
  public showFriendSteps: boolean = false
  public showRecipes: boolean = false 
  public showRecipeSteps: boolean = false
  public showFriends: boolean = false
  public showReddit: boolean = false
  public showEditItem: boolean = false
  public showEditStep: boolean = false
  public showEditMyStep : boolean = false
  

   public $accounts = new BehaviorSubject<Account[]>([])
   public $users = new BehaviorSubject<User[]>([])
   public $user = new BehaviorSubject<User>(new User(0,0,''))
   public $friends = new BehaviorSubject<Friend[]>([])
   public $myFriends = new BehaviorSubject<Friend[]>([])
   public $item = new BehaviorSubject<Item>(new Item(0,0,'','',0,0))
   public $items = new BehaviorSubject<Item[]>([])
   public $pantries = new BehaviorSubject<Pantry>(new Pantry(0,0,[]))
   public $friendRecipes = new BehaviorSubject<Recipe[]>([])
   public $steps = new BehaviorSubject<Step[]>([])
   public $friendSteps = new BehaviorSubject<Step[]>([])
   public $mySteps = new BehaviorSubject<Step[]>([])
   public $recipes = new BehaviorSubject<Recipe[]>([])
   
   public accountId = 0
   public familyName = ''
   public userId = 0
   public userName = ''
   public recipeId = 0
   public isLoggedIn: boolean = false
   public friendId = 0
   public stepId = 0



   public showError(message:string) :void{
    this.snackBar.open(message, undefined,{duration: 4500})
  }

  



   public openRegister(): void  {
    this.showRegister = true
    this.showLogin = false
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this. showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
   }

   public openLogin(): void {
    this.showRegister = false
    this.showLogin = true
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this. showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
   }

   public openUser(): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = true
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this. showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
   }

   public openPantry(id: number): void {
    this.getUserById(id)
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = true
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this. showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
   }


   public openUserApply(): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = false
    this.showUserApply = true
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this. showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
   }

   public openNewItem(): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = true
    this.showSteps = false
    this.showNewRecipe = false
    this. showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
   }

   public openSteps(): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = true
    this.showNewRecipe = false
    this. showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
   }

   public openNewRecipe(): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = true
    this. showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
   }

   public openInviteList(): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this. showInviteList = true
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
   }

   public openFriendRecipes(id: number): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this.showInviteList = false
    this.showFriendRecipes = true
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
    this.friendId = id

   }


   public openFriendSteps(recipeId: number): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this.showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = true
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
    this.recipeId = recipeId
   }
      
   public openRecipes(): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this.showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = true
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
   }

   public openRecipeSteps(id: number): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this.showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = true
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
    this.recipeId = id
    console.log(this.recipeId)
   }

   public logout(): void {
    this.showRegister = false
    this.showLogin = true
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this.showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false

   }

   

   public submitRecipe(): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this.showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = true
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
    this.showError('New recipe added')
   }
   
   public homeButton(): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = true
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this.showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= false
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
   }

   public openFriends(): void {
   this.showRegister = false
   this.showLogin = false
   this.showUser = false
   this.showPantry = false
   this.showUserApply = false
   this.showNewItem = false
   this.showSteps = false
   this.showNewRecipe = false
   this. showInviteList = false
   this.showFriendRecipes = false
   this.showFriendSteps = false
   this.showRecipes = false
   this.showRecipeSteps = false
   this.showFriends =true
   this.showReddit= false
   this.showEditItem = false
   this.showEditStep = false
   this.showEditMyStep = false
   }


   public openReddit(): void {
    this.showRegister = false
    this.showLogin = false
    this.showUser = false
    this.showPantry = false
    this.showUserApply = false
    this.showNewItem = false
    this.showSteps = false
    this.showNewRecipe = false
    this. showInviteList = false
    this.showFriendRecipes = false
    this.showFriendSteps = false
    this.showRecipes = false
    this.showRecipeSteps = false
    this.showFriends =false
    this.showReddit= true
    this.showEditItem = false
    this.showEditStep = false
    this.showEditMyStep = false
   }



  public getUserById(id : number): void {
    this.http.get<User>(`https://localhost:7263/api/User/${id}`)
    .pipe(take(1))
    .subscribe({
      next: (user) => {
        this.$user.next(user)
        this.userId = user.id
        this.userName = user.name
      },
      error: (err) => {
        if (err.status === 404 && err.statusText == "OK") {
          this.$users.next([])
        }
      }
    })
  }

  






   public getAllUsers(id: number): void {
    this.http.get<User[]>(`https://localhost:7263/api/User/getUsers/${id}`)
    .pipe(take(1))
    .subscribe({
      next: (users) => {
        this.$users.next(users)
      },
      error: (err) => {
        if (err.status === 404 && err.statusText == "OK") {
          this.$users.next([])
        }
      }
    })

   }
   
   public getAllItems(id: number): void {
    this.http.get<Item[]>(`https://localhost:7263/api/Item/getItems/${id}`)
    .pipe(take(1))
    .subscribe({
      next: (items) => {
        this.$items.next(items)
      },
      error: (err) => {
        if (err.status === 404 && err.statusText == "OK") {
          this.$items.next([])
        }
      }
    })

   }

   
 public getNewSteps(recipeId: number): void {
  this.http.get<Step[]>(`https://localhost:7263/api/Step/newStep/${recipeId}`)
  .pipe(take(1))
  .subscribe({
    next: (steps) => {
      this.$steps.next(steps)
    },
    error: (err) => {
      if (err.status === 404 && err.statusText == "OK") {
        this.$steps.next([])
      }
    }
  })

 }


 
 public getAllAccounts(id: number): void {
  this.http.get<Account[]>(`https://localhost:7263/api/Account/getAccounts/${id}`)
  .pipe(take(1))
  .subscribe({
    next: (accounts) => {
      this.$accounts.next(accounts)
    },
    error: (err) => {
      if (err.status === 404 && err.statusText == "OK") {
        this.$accounts.next([])
      }
    }
  })

 }

 
 public getInviteList(id: number): void {
  this.http.get<Friend[]>(`https://localhost:7263/api/Friend/getInvites/${id}`)
  .pipe(take(1))
  .subscribe({
    next: (friends) => {
      this.$friends.next(friends)
    },
    error: (err) => {
      if (err.status === 404 && err.statusText == "OK") {
        this.$friends.next([])
      }
    }
  })

 }

 public getFriendRecipes(id: number): void {
  this.http.get<Recipe[]>(`https://localhost:7263/api/Recipe/friendRecipes/${id}/${this.friendId}`)
  .pipe(take(1))
  .subscribe({
    next: (recipes) => {
      this.$friendRecipes.next(recipes)
    },
    error: (err) => {
      if (err.status === 404 && err.statusText == "OK") {
        this.$friendRecipes.next([])
      }
    }
  })

 }

 
 public getFRecipeSteps(id: number, recipeId: number): void {
  this.http.get<Step[]>(`https://localhost:7263/api/Step/friendSteps/${id}/${recipeId}`)
  .pipe(take(1))
  .subscribe({
    next: (steps) => {
      this.$friendSteps.next(steps)
    },
    error: (err) => {
      if (err.status === 404 && err.statusText == "OK") {
        this.$friendSteps.next([])
      }
    }
  })

 }

     
 public getSteps(recipeId: number): void {
  this.http.get<Step[]>(`https://localhost:7263/api/Step/getSteps/${recipeId}`)
  .pipe(take(1))
  .subscribe({
    next: (steps) => {
      this.$mySteps.next(steps)
    },
    error: (err) => {
      if (err.status === 404 && err.statusText == "OK") {
        this.$mySteps.next([])
      }
    }
  })

 }

  
 public getFriends(Id: number): void {
  this.http.get<Friend[]>(`https://localhost:7263/api/Friend/getFriends/${Id}`)
  .pipe(take(1))
  .subscribe({
    next: (friends) => {
      this.$myFriends.next(friends)
    },
    error: (err) => {
      if (err.status === 404 && err.statusText == "OK") {
        this.$myFriends.next([])
      }
    }
  })

 }
  
  

 public getAllRecipes(id : number): void {
  this.http.get<Recipe[]>(`https://localhost:7263/api/Recipe/getRecipes/${id}`)
  .pipe(take(1))
  .subscribe({
    next: (recipes) => {
      this.$recipes.next(recipes)
    },
    error: (err) => {
      if (err.status === 404 && err.statusText == "OK") {
        this.$recipes.next([])
      }
    }
  })
 }


  
}
