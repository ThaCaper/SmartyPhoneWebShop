import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonesDetailsComponent } from './smartphones-details.component';

describe('SmartphonesDetailsComponent', () => {
  let component: SmartphonesDetailsComponent;
  let fixture: ComponentFixture<SmartphonesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphonesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphonesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
