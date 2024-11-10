import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProgrammeComponent } from './list-programme.component';

describe('ListProgrammeComponent', () => {
  let component: ListProgrammeComponent;
  let fixture: ComponentFixture<ListProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProgrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
