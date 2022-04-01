import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCelularComponent } from './update-celular.component';

describe('UpdateCelularComponent', () => {
  let component: UpdateCelularComponent;
  let fixture: ComponentFixture<UpdateCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCelularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
