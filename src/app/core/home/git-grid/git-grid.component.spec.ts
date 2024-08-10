import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitGridComponent } from './git-grid.component';

describe('GitGridComponent', () => {
  let component: GitGridComponent;
  let fixture: ComponentFixture<GitGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
