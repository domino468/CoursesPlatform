import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {CategoryPageComponent} from './category/category-page/category-page.component';
import {CoursePageComponent} from "./course/course-page/course-page.component";
import {LecturePageComponent} from "./lecture/lecture-page/lecture-page.component";

const routes: Routes = [
  {path: "landing-page", component: LandingPageComponent},
  {path: "category-page", component: CategoryPageComponent},
  {path: "course-page", component: CoursePageComponent},
  {path: "lecture-page", component: LecturePageComponent},
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  {path: '**', component: LandingPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
