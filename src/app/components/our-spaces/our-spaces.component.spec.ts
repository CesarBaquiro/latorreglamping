import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSpacesComponent } from './our-spaces.component';

describe('OurSpacesComponent', () => {
  let component: OurSpacesComponent;
  let fixture: ComponentFixture<OurSpacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurSpacesComponent]
    });
    fixture = TestBed.createComponent(OurSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
