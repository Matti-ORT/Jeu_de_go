import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cellules } from './cellules';

describe('Cellules', () => {
  let component: Cellules;
  let fixture: ComponentFixture<Cellules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cellules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cellules);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
