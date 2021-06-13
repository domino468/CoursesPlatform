import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CategoryPageComponent } from './category/category-page/category-page.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursePageComponent } from './course/course-page/course-page.component';
import {HttpClient} from "@angular/common/http";
import {CourseService} from "./course/services/course.service";
import {CategoryService} from "./category/services/category.service";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CategoryPageComponent,
    HeaderComponent,
    CoursePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClient,
  CourseService,
  CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
