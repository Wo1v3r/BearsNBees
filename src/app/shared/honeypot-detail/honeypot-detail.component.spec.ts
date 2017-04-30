import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneypotDetailComponent } from './honeypot-detail.component';
import { MdCardModule } from '@angular/material';


import { Tech } from '../data/tech';


describe('HoneypotDetailComponent', () => {
  let component: HoneypotDetailComponent;
  let fixture: ComponentFixture<HoneypotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneypotDetailComponent ],
      imports: [ MdCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneypotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
