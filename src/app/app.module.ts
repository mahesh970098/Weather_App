import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhetherCComponent } from './components/whether-c/whether-c.component';
import { LocationComponent } from './components/location/location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ChartAllModule } from '@syncfusion/ej2-angular-charts';


@NgModule({
  declarations: [
    AppComponent,
    WhetherCComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule,
    CommonModule, ChartAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
