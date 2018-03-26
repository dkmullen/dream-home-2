import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HouseSizeComponent } from './house-size/house-size.component';
import { HouseEssayComponent } from './house-essay/house-essay.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';


// define my routes
const appRoutes: Routes = [
  { path: '', component: HouseSizeComponent },
  { path: 'essay', component: HouseEssayComponent },
  { path: 'details', component: HouseDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HouseSizeComponent,
    HouseEssayComponent,
    HouseDetailsComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) // register routes with angular

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
