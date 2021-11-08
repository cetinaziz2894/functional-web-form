import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalformComponent } from './functionalform.component';

describe('FunctionalformComponent', () => {
  let component: FunctionalformComponent;
  let fixture: ComponentFixture<FunctionalformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
