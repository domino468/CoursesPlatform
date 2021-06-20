import {Component, OnInit} from '@angular/core';
import {Course} from "../models/course";
import {CourseService} from "../services/course.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService, private router: Router) {
  }

  public getCourses(): void {
    this.courseService.getCourses().subscribe(
      (response: Course[]) => {
        this.courses = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  goToLectures(): void {
    this.router.navigate([`./lecture-page`])
  }

  ngOnInit(): void {
    this.getCourses();
  }

}
