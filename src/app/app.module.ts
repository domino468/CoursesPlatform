import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CategoryPageComponent } from './category/category-page/category-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CategoryPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
