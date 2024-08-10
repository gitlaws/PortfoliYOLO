import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSquareComponent } from './git-square.component';

describe('GitSquareComponent', () => {
  let component: GitSquareComponent;
  let fixture: ComponentFixture<GitSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitSquareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
