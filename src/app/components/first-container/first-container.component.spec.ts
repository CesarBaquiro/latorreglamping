import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstContainerComponent } from './first-container.component';

describe('FirstContainerComponent', () => {
  let component: FirstContainerComponent;
  let fixture: ComponentFixture<FirstContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstContainerComponent]
    });
    fixture = TestBed.createComponent(FirstContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
