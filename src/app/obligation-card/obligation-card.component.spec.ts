import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationCardComponent } from './obligation-card.component';

describe('ObligationCardComponent', () => {
  let component: ObligationCardComponent;
  let fixture: ComponentFixture<ObligationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ObligationCardComponent]
    });
    fixture = TestBed.createComponent(ObligationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
