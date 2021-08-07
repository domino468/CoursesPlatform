import {Component, OnDestroy, OnInit} from '@angular/core';
import {Course} from "../models/course";
import {CourseService} from "../services/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  private sub: Subscription | undefined;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  onCourseSelect(courseTitle: string): void {
    this.router.navigate([`./lecture-page/${courseTitle}`])
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.pipe(
      switchMap(params => this.courseService.getCoursesOfCategory(params['title'])),
      tap(courses => this.courses = courses)
    ).subscribe();
  }

  ngOnDestroy(): void {
    // @ts-ignore
    this.sub.unsubscribe();
  }
}
