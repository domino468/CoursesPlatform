import {Component, OnDestroy, OnInit} from '@angular/core';
import {Course} from "../models/course";
import {CourseService} from "../services/course.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {switchMap, tap} from "rxjs/operators";
import {OfferService} from "../../offer/offer.service";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  private sub: Subscription | undefined;

  constructor(
    private courseService: CourseService, private activatedRoute: ActivatedRoute, private offerService: OfferService) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.pipe(
      switchMap(params => this.courseService.getCoursesOfCategory(params['title'])),
      tap(courses => this.courses = courses)
    ).subscribe();
  }

  getSelectedCourseTitle(title: String) {
    this.offerService.courseTitle = title;
  }

  ngOnDestroy(): void {
    // @ts-ignore
    this.sub.unsubscribe();
  }
}
