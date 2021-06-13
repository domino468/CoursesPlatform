import {Component, OnInit} from '@angular/core';
import {Course} from "../models/course";
import {CourseService} from "../services/course.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {
  }

  public getCourses(): void {
    this.courseService.getCourses().subscribe(
      (response: Course[]) => {
        this.courses = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngOnInit(): void {
    this.getCourses();
  }

}
