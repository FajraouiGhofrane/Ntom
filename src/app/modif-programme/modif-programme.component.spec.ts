import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProgrammeComponent } from './modif-programme.component';

describe('ModifProgrammeComponent', () => {
  let component: ModifProgrammeComponent;
  let fixture: ComponentFixture<ModifProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifProgrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
