import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotemsAppComponent } from './totems-app.component';

describe('TotemsAppComponent', () => {
  let component: TotemsAppComponent;
  let fixture: ComponentFixture<TotemsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotemsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotemsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
