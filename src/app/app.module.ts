import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HouseSizeComponent } from './house-size/house-size.component';
import { HouseEssayComponent } from './house-essay/house-essay.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';


// define my routes
const appRoutes: Routes = [
  { path: '', component: HouseSizeComponent },
  { path: 'essay', component: HouseEssayComponent },
  { path: 'details', component: HouseDetailsComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HouseSizeComponent,
    HouseEssayComponent,
    HouseDetailsComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // register routes with angular

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
