import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTotemComponent } from './update-totem.component';

describe('UpdateTotemComponent', () => {
  let component: UpdateTotemComponent;
  let fixture: ComponentFixture<UpdateTotemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTotemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTotemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
