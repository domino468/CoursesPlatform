import {Component, OnDestroy, OnInit} from '@angular/core';
import {LectureService} from "../services/lecture.service";
import {Lecture} from "../models/lecture";
import {FormControl, Validators} from "@angular/forms";
import {switchMap, tap} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {SummaryService} from "../../summary-page/services/summary.service";
import {OfferService} from "../../offer/offer.service";

let emailValidation = Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");

@Component({
  selector: 'app-lecture-page',
  templateUrl: './lecture-page.component.html',
  styleUrls: ['./lecture-page.component.scss']
})
export class LecturePageComponent implements OnInit, OnDestroy {
  lectures: Lecture[] = [];
  private sub: Subscription | undefined;
  checkedLectures: string[] = [];
  summaryPage: string = '/summary-page';

  email = new FormControl('', [
    Validators.required,
    emailValidation,
  ]);

  constructor(
    private lectureService: LectureService,
    private activatedRoute: ActivatedRoute,
    private summaryService: SummaryService,
    private offerService: OfferService,
    private router: Router,
  ) {
  }

  checkIfButtonShouldBeDisabled = (): boolean =>
    (this.email.pristine || this.email.invalid || this.checkedLectures.length === 0);


  checkIfEmailIsRequiredErrorShouldBeDisplayed = (): boolean =>
    !!(this.email.touched && this.email.errors?.required);


  checkIfCheckBoxErrorShouldBeDisabled = (): boolean =>
    this.email.valid && this.checkedLectures.length == 0;


  handleCourseClick(event: any, name: string) {
    // TODO check event type
    if (event.target['checked']) {
      this.checkedLectures.push(name);
    } else {
      this.checkedLectures = this.checkedLectures.filter(item => item !== name);
    }
  }

  onSubmit(checkedItems: Array<string>, email: string) {
    this.checkedLectures = checkedItems;
    this.summaryService.email = email;
    this.summaryService.lectures = checkedItems;
    this.createOffer(checkedItems, email);
    this.router.navigate([this.summaryPage])
  }

  private createOffer(lectureTitles: Array<string>, email: string) {
    this.offerService.createOffer({
      mail: email,
      categoryTitle: this.offerService.categoryTitle,
      courseTitle: this.offerService.courseTitle,
      lecturesTitle: lectureTitles,
    })
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
