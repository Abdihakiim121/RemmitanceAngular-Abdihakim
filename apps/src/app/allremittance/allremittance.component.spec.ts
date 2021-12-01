import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllremittanceComponent } from './allremittance.component';

describe('AllremittanceComponent', () => {
  let component: AllremittanceComponent;
  let fixture: ComponentFixture<AllremittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllremittanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllremittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
