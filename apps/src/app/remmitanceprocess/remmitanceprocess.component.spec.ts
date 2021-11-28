import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemmitanceprocessComponent } from './remmitanceprocess.component';

describe('RemmitanceprocessComponent', () => {
  let component: RemmitanceprocessComponent;
  let fixture: ComponentFixture<RemmitanceprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemmitanceprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemmitanceprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
