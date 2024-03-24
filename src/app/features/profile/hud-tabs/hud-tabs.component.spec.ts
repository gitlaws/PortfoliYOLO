import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudTabsComponent } from './hud-tabs.component';

describe('HudTabsComponent', () => {
  let component: HudTabsComponent;
  let fixture: ComponentFixture<HudTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HudTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HudTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
