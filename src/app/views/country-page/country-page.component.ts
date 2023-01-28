import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomePageService } from '../home-page/home-page.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private homePageService: HomePageService,
    private location: Location
  ) { }

  countryData: any = {};
  languages = "";
  currencies = "";
  nativeName = "";
  isDarkMode = false;

  ngOnInit(): void {
    const countryName = this.route.snapshot.paramMap.get('country');
    this.homePageService.getCountriesByName(countryName).subscribe(data => {
      this.countryData = data[0];
      this.languages = Object.values(this.countryData.languages || {}).toString();
      this.currencies = Object.values(this.countryData.currencies || {}).map((value: any) => value.name).toString();
      this.nativeName = (Object.values(this.countryData.name.nativeName || {})[0] as any).common;
    });
    this.isDarkMode = !this.homePageService.isLightTheme();
    this.homePageService.darkThemeChanges.subscribe(data => {
      this.isDarkMode = data;
    });
  }

  goBack() {
    this.location.back();
  }

}
