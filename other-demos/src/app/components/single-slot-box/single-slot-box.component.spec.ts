import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlotBoxComponent } from './single-slot-box.component';

describe('SingleSlotBoxComponent', () => {
  let component: SingleSlotBoxComponent;
  let fixture: ComponentFixture<SingleSlotBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSlotBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSlotBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
