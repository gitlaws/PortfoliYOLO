import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjexComponent } from './projex.component';

describe('ProjexComponent', () => {
  let component: ProjexComponent;
  let fixture: ComponentFixture<ProjexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
