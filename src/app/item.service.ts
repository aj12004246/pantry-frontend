import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Item } from 'src/Models/Item';
import { CentralService } from './central.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(public main: CentralService, public http: HttpClient) { }

 public unit = 0


 public editedItem: Item = new Item(0,0,'','',0,0)


 public openEditItem(item: Item): void {
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
  this.main.showEditItem = true
  this.main.showEditStep = false
  this.main.showEditMyStep = false
  this.editedItem = {
      id: item.id,
      accountId: item.accountId,
      name: item.name,
      img: item.img,
      weight: item.weight,
      calories: item.calories      
    };
 
 }


  public submitItem(accountId: number, name: string, img: string, weight: number, calories: number, unit : number): void {
    this.http.post(`https://localhost:7263/api/Item/addItem/${accountId}/${unit}`,
    { 
      accountId,      
      name,
      img,
      weight,
      calories,
    }
  )
    .pipe(take(1))
    .subscribe({
      next: () => {

        this.main.showError('Item was added Succesfully')
        this.main.openPantry(this.main.userId)
    
      },
      error: (err) => {
        if (err.status === 409) {
          this.main.showError('Item already exists !')
        }
      }
    })
  }


  public validateItem(accountId: number, name: string, img: string,weight: number, calories: number, unit: number): void {
    if (name == '' || name == null) {
      this.main.showError("Enter The Item's Name")
      return
    }
    if (img == '' || img == null) {
      this.main.showError('Enter The Image Url')
      return
    }
    if (weight == 0 || weight == null) {
      this.main.showError('Enter a valid weight')
      return
    }
    if (unit == 0 || unit == null) {
      this.main.showError('Enter a valid unit')
      return
    }
    if (calories == 0 || calories == null) {
      this.main.showError('Enter a valid number of calories')
      return
    }
    if (accountId == 0 || accountId == null) {
      this.main.showError('BadRequest')
      return
    }
    this.submitItem(accountId, name, img, weight, calories, unit)
  }


  
  public editItem(accountId: number, name: string, img: string,weight: number, calories: number, unit: number): void {
    if (name == '' || name == null) {
      this.main.showError("Enter The Item's Name")
      return
    }
    if (img == '' || img == null) {
      this.main.showError('Enter The Image Url')
      return
    }
    if (weight == 0 || weight == null) {
      this.main.showError('Enter a valid weight')
      return
    }
    if (unit == 0 || unit == null) {
      this.main.showError('Enter a valid unit')
      return
    }
    if (calories == 0 || calories == null) {
      this.main.showError('Enter a valid number of calories')
      return
    }
    if (accountId == 0 || accountId == null) {
      this.main.showError('BadRequest')
      return
    }
    this.submitEditItem()
  }


  
  public submitEditItem(): void {
    this.http.put(`https://localhost:7263/api/Item/${this.editedItem.id}/${this.unit}`, this.editedItem)
    .pipe(take(1))
    .subscribe({
      next: () => {

        this.main.showError('Item was edited Succesfully')
        this.main.openPantry(this.main.userId)
    
      },
      error: (err) => {
        if (err.status === 409) {
          this.main.showError('Item already exists !')
        }
      }
    })
  }



  }




  

