import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationContentComponent } from './registration-content.component';

describe('RegistrationContentComponent', () => {
  let component: RegistrationContentComponent;
  let fixture: ComponentFixture<RegistrationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
