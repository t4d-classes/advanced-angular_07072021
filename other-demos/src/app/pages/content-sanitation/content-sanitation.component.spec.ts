import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSanitationComponent } from './content-sanitation.component';

describe('ContentSanitationComponent', () => {
  let component: ContentSanitationComponent;
  let fixture: ComponentFixture<ContentSanitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSanitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSanitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
