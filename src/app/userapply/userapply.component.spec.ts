import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserapplyComponent } from './userapply.component';

describe('UserapplyComponent', () => {
  let component: UserapplyComponent;
  let fixture: ComponentFixture<UserapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserapplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
