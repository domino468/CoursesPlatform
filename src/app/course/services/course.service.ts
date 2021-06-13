import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Course} from "../models/course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiServerUrl: string = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiServerUrl}/course/all`)
  }
}
