import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneypotsComponent } from './honeypots.component';
import { HoneypotDetailComponent } from '../../shared/honeypot-detail/honeypot-detail.component';


describe('HoneypotsComponent', () => {
  let component: HoneypotsComponent;
  let fixture: ComponentFixture<HoneypotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneypotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneypotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
