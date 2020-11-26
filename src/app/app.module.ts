import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule, WavesModule, ButtonsModule, CollapseModule, MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { HotelAndResortsComponent } from './components/hotel-and-resorts/hotel-and-resorts.component';
import {AccordionModule} from "ngx-accordion";
import {MatExpansionModule} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import {GoogleMapsAPIWrapper} from '@agm/core';
import { PrivateretreatsComponent } from './components/privateretreats/privateretreats.component';
import 'hammerjs';
// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hotelresorts', component: HotelAndResortsComponent},
  {path: 'privateretreats', component: PrivateretreatsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HotelAndResortsComponent,
    PrivateretreatsComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule,
    MatExpansionModule,
    AccordionModule,
    MyDateRangePickerModule,
    ButtonsModule,
    CollapseModule,
    WavesModule,
    NavbarModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    DropdownModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    DropdownModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDS6RaxnYc6YQXe4q33eJ9oJk-i5lbBy6E'})
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
