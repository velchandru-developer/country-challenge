import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './views/home-page/home-page.component';
import { CountryPageComponent } from './views/country-page/country-page.component';

@NgModule({
  declarations: [ 

  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent  },
      { path: 'country/:country', component: CountryPageComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


