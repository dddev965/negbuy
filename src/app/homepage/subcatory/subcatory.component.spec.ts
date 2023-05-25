import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatoryComponent } from './subcatory.component';

describe('SubcatoryComponent', () => {
  let component: SubcatoryComponent;
  let fixture: ComponentFixture<SubcatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcatoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
