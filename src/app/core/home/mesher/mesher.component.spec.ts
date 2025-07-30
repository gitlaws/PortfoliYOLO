import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesherComponent } from './mesher.component';

describe('MesherComponent', () => {
  let component: MesherComponent;
  let fixture: ComponentFixture<MesherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
