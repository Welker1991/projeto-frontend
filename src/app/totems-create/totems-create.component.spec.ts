import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotemsCreateComponent } from './totems-create.component';

describe('TotemsCreateComponent', () => {
  let component: TotemsCreateComponent;
  let fixture: ComponentFixture<TotemsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotemsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotemsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
