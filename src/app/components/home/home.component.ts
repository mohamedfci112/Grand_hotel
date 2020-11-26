import { Component, OnInit } from '@angular/core';
import {IMyDrpOptions, IMyDateRangeModel} from 'mydaterangepicker';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource = {
    "chart": {
      "caption": "Visitors Analysis",
      "subCaption": "Four Seasons",
      "xAxisname": "Region",
      "yAxisName": "Number (In VISITORS)",
      "numberPrefix": "",
      "exportenabled": "1",
      "theme": "fusion"
    },
    "categories": [{
      "category": [{
        "label": "East"
      }, {
        "label": "West"
      }, {
        "label": "South"
      }, {
        "label": "North"
      }]
    }],
    "dataset": [{
      "seriesName": "Actual Expenses",
      "data": [{
        "value": "1041290"
      }, {
        "value": "655912"
      }, {
        "value": "511404"
      }, {
        "value": "448136"
      }]
    }, {
      "seriesName": "Budgeted Expenses",
      "renderAs": "line",
      "data": [{
        "value": "1007430"
      }, {
        "value": "476485"
      }, {
        "value": "385352"
      }, {
        "value": "526791"
      }]
    }, {
      "seriesName": "Unknown liabilities",
      "renderAs": "area",
      "showAnchors" : "0",
      "data": [{
        "value": "143860"
      }, {
        "value": "79427"
      }, {
        "value": "126052"
      }, {
        "value": "78655"
      }]
    }]
  };

  images = [
    // tslint:disable-next-line:max-line-length
    'https://www.fourseasons.com/alt/img-opt/~80.930.0,0000-393,4168-2209,8365-1243,0330/publish/content/dam/fourseasons/images/web/SDI/SDI_131_original.jpg',
   // tslint:disable-next-line:max-line-length
   'https://www.fourseasons.com/alt/img-opt/~80.930.0,0000-1618,1705-2293,0000-1289,8125/publish/content/dam/fourseasons/images/web/MQU/MQU_001_original.jpg',
   // tslint:disable-next-line:max-line-length
   'https://www.fourseasons.com/alt/img-opt/~80.930.0,0000-0,2497-2995,7476-1685,1080/publish/content/dam/fourseasons/images/web/KUA/KUA_061_original.jpg'
  ];

  myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};
  constructor() { }

  onDateRangeChanged(event: IMyDateRangeModel) {
    // event properties are: event.beginDate, event.endDate, event.formatted,
    // event.beginEpoc and event.endEpoc
}

  ngOnInit() {

  }

}
