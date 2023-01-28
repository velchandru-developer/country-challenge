import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomePageComponent } from './views/home-page/home-page.component';
import { CountryPageComponent } from './views/country-page/country-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CountryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
