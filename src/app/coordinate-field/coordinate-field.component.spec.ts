import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateFieldComponent } from './coordinate-field.component';

describe('CoordinateFieldComponent', () => {
  let component: CoordinateFieldComponent;
  let fixture: ComponentFixture<CoordinateFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
