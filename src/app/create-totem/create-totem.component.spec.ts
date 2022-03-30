import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTotemComponent } from './create-totem.component';

describe('CreateTotemComponent', () => {
  let component: CreateTotemComponent;
  let fixture: ComponentFixture<CreateTotemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTotemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTotemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
