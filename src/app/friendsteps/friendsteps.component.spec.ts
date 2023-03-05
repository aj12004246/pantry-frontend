import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendstepsComponent } from './friendsteps.component';

describe('FriendstepsComponent', () => {
  let component: FriendstepsComponent;
  let fixture: ComponentFixture<FriendstepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendstepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
