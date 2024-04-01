import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybergurComponent } from './cybergur.component';

describe('CybergurComponent', () => {
  let component: CybergurComponent;
  let fixture: ComponentFixture<CybergurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybergurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CybergurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
