import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHudComponent } from './profile-hud.component';

describe('ProfileHudComponent', () => {
  let component: ProfileHudComponent;
  let fixture: ComponentFixture<ProfileHudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileHudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
