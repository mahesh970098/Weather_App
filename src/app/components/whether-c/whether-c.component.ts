import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { WeatherService } from '../../service/weather.service';
@Component({
  selector: 'app-whether-c',
  templateUrl: './whether-c.component.html',
  styleUrls: ['./whether-c.component.css']
})
export class WhetherCComponent implements OnInit {

  location = new FormControl();
  locationsList = [];
  day1: any
  day2: any
  day3: any
  day4: any
  day5: any
  weatherDesc: any
  mainWeather: any
  wind: any
  pressure: any
  temperature: any
  showData = false;
  locationGroup = new FormGroup({
    location: new FormControl()
  })

  constructor(private service: WeatherService) { }

  ngOnInit() {
  }

  onSubmit(locationValue: any, isPush: any) {
    let selectedLocation = locationValue;
    this.service.searchWeatherData(selectedLocation).subscribe(success => {
      this.showData = true;
      this.weatherDesc = success.weather[0].description;
      this.mainWeather = success.weather[0].main;
      this.wind = success.wind.speed + 'ms  ' + success.wind.deg + ' deg';
      this.pressure = success.main.pressure;
      this.temperature = (success.main.temp - 273.15).toFixed(1);
      if (isPush) {
        let appendedData = ' - ' + this.temperature + 'C ' + this.mainWeather;
        let selectedLocationData = {};
        //  selectedLocationData['location'] = selectedLocation;
        //  selectedLocationData['data'] = appendedData;
        //  this.locationsList.push(selectedLocationData);
      }
      let latitude = success.coord.lat;
      let longitude = success.coord.lon;
      for (let i = 0; i < 5; i++) {
        this.service.getWeeklyData(latitude, longitude, i).subscribe(res => {
          let spanId = 'day' + i;
          //  res['current'].temp; 
          //  document.getElementById(spanId).innerHTML = (res['current'].temp - 273.15).toFixed(1)+ ' C';
          // spanId. (res['current'].temp - 273.15).toFixed(1)+ ' C';

        });
      }

    }, error => {

      alert("Please enter the valid location");
    });
  }

  selectedLocation(location: any) {
    console.log("location", location);
    this.onSubmit(location, false);
  }

  clearWeatherData() {
    this.locationsList = [];
    this.showData = false;
  }

}