import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationBackdropComponent } from './obligation-backdrop.component';

describe('ObligationBackdropComponent', () => {
  let component: ObligationBackdropComponent;
  let fixture: ComponentFixture<ObligationBackdropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ObligationBackdropComponent]
    });
    fixture = TestBed.createComponent(ObligationBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
