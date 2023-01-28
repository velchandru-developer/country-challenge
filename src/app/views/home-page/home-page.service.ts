import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://restcountries.com/v3.1";

  darkThemeChanges = new Subject<any>();

  getAllCountries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getCountriesByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/name/${name}`);
  }

  setDarkTheme(value) {
    window.localStorage.setItem("isDarkMode", value);
  }

  getDarkTheme() {
    return window.localStorage.getItem("isDarkMode");
  }

  isLightTheme() {
    return Boolean(!this.getDarkTheme() || this.getDarkTheme() === "false");
  }
}
