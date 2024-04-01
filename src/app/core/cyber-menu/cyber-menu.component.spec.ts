import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberMenuComponent } from './cyber-menu.component';

describe('CyberMenuComponent', () => {
  let component: CyberMenuComponent;
  let fixture: ComponentFixture<CyberMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyberMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
