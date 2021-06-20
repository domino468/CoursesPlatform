import {Component, OnInit} from '@angular/core';
import {LectureService} from "../services/lecture.service";
import {Lecture} from "../models/lecture";
import {HttpErrorResponse} from "@angular/common/http";
import {FormControl, Validators} from "@angular/forms";

let emailValidation = Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");

@Component({
  selector: 'app-lecture-page',
  templateUrl: './lecture-page.component.html',
  styleUrls: ['./lecture-page.component.css']
})
export class LecturePageComponent implements OnInit {
  lectures: Lecture[] = [];
  email = new FormControl('', [
    Validators.required,
    emailValidation,
  ]);

  constructor(private lectureService: LectureService) {
  }

  public getLectures(): void {
    this.lectureService.getLectures().subscribe(
      (response: Lecture[]) => {
        this.lectures = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }
  ngOnInit(): void {
    this.getLectures();
  }

}
