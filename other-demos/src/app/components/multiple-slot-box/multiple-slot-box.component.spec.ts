import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSlotBoxComponent } from './multiple-slot-box.component';

describe('MultipleSlotBoxComponent', () => {
  let component: MultipleSlotBoxComponent;
  let fixture: ComponentFixture<MultipleSlotBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleSlotBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSlotBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
