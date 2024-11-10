import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifReservationComponent } from './modif-reservation.component';

describe('ModifReservationComponent', () => {
  let component: ModifReservationComponent;
  let fixture: ComponentFixture<ModifReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
