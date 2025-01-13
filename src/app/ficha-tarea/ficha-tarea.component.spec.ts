import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaTareaComponent } from './ficha-tarea.component';

describe('FichaTareaComponent', () => {
  let component: FichaTareaComponent;
  let fixture: ComponentFixture<FichaTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaTareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
