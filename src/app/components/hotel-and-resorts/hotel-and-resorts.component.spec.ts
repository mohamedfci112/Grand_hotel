import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAndResortsComponent } from './hotel-and-resorts.component';

describe('HotelAndResortsComponent', () => {
  let component: HotelAndResortsComponent;
  let fixture: ComponentFixture<HotelAndResortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelAndResortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelAndResortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
