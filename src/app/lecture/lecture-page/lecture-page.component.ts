import {Component, OnDestroy, OnInit} from '@angular/core';
import {LectureService} from "../services/lecture.service";
import {Lecture} from "../models/lecture";
import {FormControl, Validators} from "@angular/forms";
import {switchMap, tap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

let emailValidation = Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");

@Component({
  selector: 'app-lecture-page',
  templateUrl: './lecture-page.component.html',
  styleUrls: ['./lecture-page.component.css']
})
export class LecturePageComponent implements OnInit, OnDestroy {
  lectures: Lecture[] = [];
  private sub: Subscription | undefined;
  checkedLectures: string[] = [];
  areLecturesTouched: boolean = false;

  email = new FormControl('', [
    Validators.required,
    emailValidation,
  ]);

  constructor(private lectureService: LectureService,
              private activatedRoute: ActivatedRoute) {
  }

  handleCourseClick(event: any, name: string) {
    if (event.target['checked']) {
      this.checkedLectures.push(name);
    } else {
      this.checkedLectures = this.checkedLectures.filter(item => item !== name);
    }
    this.areLecturesTouched = true;
    console.log(this.checkedLectures)
  }

  onSubmit(checkedItems: Array<string>, email: string) {
    this.checkedLectures = checkedItems;
    console.log(checkedItems, email)
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.pipe(
      switchMap(params => this.lectureService.getLecturesOfCourse(params['title'])),
      tap(lectures => this.lectures = lectures)
    ).subscribe();
  }

  ngOnDestroy() {
    // @ts-ignore
    this.sub.unsubscribe();
  }

}
