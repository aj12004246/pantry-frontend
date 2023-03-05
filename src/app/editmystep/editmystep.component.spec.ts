import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmystepComponent } from './editmystep.component';

describe('EditmystepComponent', () => {
  let component: EditmystepComponent;
  let fixture: ComponentFixture<EditmystepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmystepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditmystepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
