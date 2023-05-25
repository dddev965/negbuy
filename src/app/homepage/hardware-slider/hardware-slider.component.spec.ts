import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareSliderComponent } from './hardware-slider.component';

describe('HardwareSliderComponent', () => {
  let component: HardwareSliderComponent;
  let fixture: ComponentFixture<HardwareSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
