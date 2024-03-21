import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTabnavComponent } from './profile-tabnav.component';

describe('ProfileTabnavComponent', () => {
  let component: ProfileTabnavComponent;
  let fixture: ComponentFixture<ProfileTabnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileTabnavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileTabnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
