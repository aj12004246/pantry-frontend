import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstepComponent } from './editstep.component';

describe('EditstepComponent', () => {
  let component: EditstepComponent;
  let fixture: ComponentFixture<EditstepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditstepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
