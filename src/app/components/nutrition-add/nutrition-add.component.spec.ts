import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionAddComponent } from './nutrition-add.component';

describe('NutritionAddComponent', () => {
  let component: NutritionAddComponent;
  let fixture: ComponentFixture<NutritionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
