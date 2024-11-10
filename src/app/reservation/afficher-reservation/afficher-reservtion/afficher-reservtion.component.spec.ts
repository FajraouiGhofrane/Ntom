import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherReservtionComponent } from './afficher-reservtion.component';

describe('AfficherReservtionComponent', () => {
  let component: AfficherReservtionComponent;
  let fixture: ComponentFixture<AfficherReservtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfficherReservtionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherReservtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
