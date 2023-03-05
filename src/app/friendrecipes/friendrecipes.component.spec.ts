import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendrecipesComponent } from './friendrecipes.component';

describe('FriendrecipesComponent', () => {
  let component: FriendrecipesComponent;
  let fixture: ComponentFixture<FriendrecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendrecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
