import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lecture} from "../models/lecture";

@Injectable({
  providedIn: 'root'
})
export class LectureService {
  private apiServerUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getLecturesOfCourse(courseTitle: string): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(`${this.apiServerUrl}/course/lectures/${courseTitle}`)
  }
}
