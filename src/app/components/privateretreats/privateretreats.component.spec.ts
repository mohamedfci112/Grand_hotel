import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateretreatsComponent } from './privateretreats.component';

describe('PrivateretreatsComponent', () => {
  let component: PrivateretreatsComponent;
  let fixture: ComponentFixture<PrivateretreatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateretreatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateretreatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
