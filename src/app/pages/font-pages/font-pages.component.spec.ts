import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontPagesComponent } from './font-pages.component';

describe('FontPagesComponent', () => {
  let component: FontPagesComponent;
  let fixture: ComponentFixture<FontPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
