import { Component } from '@angular/core';
import { HomePageService } from './views/home-page/home-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme = "Light";

  constructor(private homePageService: HomePageService) { }

  ngOnInit() {
    if (this.homePageService.isLightTheme()) {
      this.theme = "Dark";
      this.setLightMode();
    } else {
      this.theme = "Light";
      this.setDarkMode();
    }
  }

  toggleDarkMode() {
    if (this.homePageService.isLightTheme()) {
      this.homePageService.setDarkTheme(true);
      this.setDarkMode();
      this.theme = "Light";
      this.homePageService.darkThemeChanges.next(true);
    } else {
      this.homePageService.setDarkTheme(false);
      this.setLightMode();
      this.theme = "Dark";
      this.homePageService.darkThemeChanges.next(false);
    }
  }

  setDarkMode() {
    document.documentElement.style.setProperty("--white", "hsl(209, 23%, 22%)");
    document.documentElement.style.setProperty("--black", "hsl(0, 0%, 100%)");
    document.documentElement.style.setProperty("--light-grey", "hsl(207, 26%, 17%)");
  }

  setLightMode() {
    document.documentElement.style.setProperty("--white", "hsl(0, 0%, 100%)");
    document.documentElement.style.setProperty("--black", "hsl(0, 0%, 0%)");
    document.documentElement.style.setProperty("--light-grey", "hsl(0, 0%, 98%)");
  }
}
