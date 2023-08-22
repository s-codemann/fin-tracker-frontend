import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObligationFormComponent } from './add-obligation-form.component';

describe('AddObligationFormComponent', () => {
  let component: AddObligationFormComponent;
  let fixture: ComponentFixture<AddObligationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddObligationFormComponent]
    });
    fixture = TestBed.createComponent(AddObligationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
