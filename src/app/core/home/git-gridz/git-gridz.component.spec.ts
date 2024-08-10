import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitGridzComponent } from './git-gridz.component';

describe('GitGridzComponent', () => {
  let component: GitGridzComponent;
  let fixture: ComponentFixture<GitGridzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitGridzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitGridzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
