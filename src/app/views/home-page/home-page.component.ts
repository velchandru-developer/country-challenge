import { Component, OnInit } from '@angular/core';
import { HomePageService } from './home-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private homePageService: HomePageService,
    private router: Router
  ) { }

  countriesList = [];
  allCountriesList = [];
  regions = ["Asia", "Africa", "Americas", "Europe", "Oceania"];
  inputTimer: any;
  isDarkMode = false;

  ngOnInit(): void {
    this.getAllCountries();
    this.isDarkMode = !this.homePageService.isLightTheme();
    this.homePageService.darkThemeChanges.subscribe(data => {
      this.isDarkMode = data;
    });
  }

  getAllCountries() {
    this.homePageService.getAllCountries().subscribe(data => {
      this.countriesList = data;
      this.allCountriesList = JSON.parse(JSON.stringify(this.countriesList));
    });
  }

  searchCountry(event) {
    clearTimeout(this.inputTimer);
    this.inputTimer = setTimeout(() => {
      if (event.target.value) {
        this.homePageService.getCountriesByName(event.target.value).subscribe(data => {
          this.countriesList = data;
        }, () => {
          this, this.countriesList = [];
        });
      } else {
        this.getAllCountries();
      }
    }, 500);
  }

  filterByRegion(event) {
    this.countriesList = this.allCountriesList.filter(country => country.region === event.target.value);
  }

  goToCountry(name) {
    this.router.navigate([`/country/${name}`]);
  }

}
