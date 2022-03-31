import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDesktopComponent } from './create-desktop.component';

describe('CreateDesktopComponent', () => {
  let component: CreateDesktopComponent;
  let fixture: ComponentFixture<CreateDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
