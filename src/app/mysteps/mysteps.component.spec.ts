import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystepsComponent } from './mysteps.component';

describe('MystepsComponent', () => {
  let component: MystepsComponent;
  let fixture: ComponentFixture<MystepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MystepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MystepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
