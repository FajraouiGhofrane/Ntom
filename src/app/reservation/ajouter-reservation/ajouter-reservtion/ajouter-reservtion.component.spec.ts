import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReservtionComponent } from './ajouter-reservtion.component';

describe('AjouterReservtionComponent', () => {
  let component: AjouterReservtionComponent;
  let fixture: ComponentFixture<AjouterReservtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterReservtionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterReservtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
