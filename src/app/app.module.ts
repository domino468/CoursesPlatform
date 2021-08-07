import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {CategoryPageComponent} from './category/category-page/category-page.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {CoursePageComponent} from './course/course-page/course-page.component';
import {LecturePageComponent} from "./lecture/lecture-page/lecture-page.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CourseService} from "./course/services/course.service";
import {CategoryService} from "./category/services/category.service";
import {LectureService} from "./lecture/services/lecture.service";
import {SummaryPageComponent} from './summary-page/summary-page.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CategoryPageComponent,
    HeaderComponent,
    CoursePageComponent,
    LecturePageComponent,
    SummaryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpClient,
    CourseService,
    CategoryService,
    LectureService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
