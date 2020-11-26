import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-and-resorts',
  templateUrl: './hotel-and-resorts.component.html',
  styleUrls: ['./hotel-and-resorts.component.css']
})
export class HotelAndResortsComponent implements OnInit {

  lat: any = 29.9966141151866;
  lng: any = 31.260692130695247;

  constructor() { }

  ngOnInit() {
  }

}
