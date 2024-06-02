import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordContentComponent } from './forget-password-content.component';

describe('ForgetPasswordContentComponent', () => {
  let component: ForgetPasswordContentComponent;
  let fixture: ComponentFixture<ForgetPasswordContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPasswordContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgetPasswordContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
