import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCelularComponent } from './create-celular.component';

describe('CreateCelularComponent', () => {
  let component: CreateCelularComponent;
  let fixture: ComponentFixture<CreateCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCelularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
