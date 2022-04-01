import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTabletComponent } from './update-tablet.component';

describe('UpdateTabletComponent', () => {
  let component: UpdateTabletComponent;
  let fixture: ComponentFixture<UpdateTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTabletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
