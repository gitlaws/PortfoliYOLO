import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjxComponent } from './projx.component';

describe('ProjxComponent', () => {
  let component: ProjxComponent;
  let fixture: ComponentFixture<ProjxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
