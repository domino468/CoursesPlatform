import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Course} from "../models/course";

@Injectable()
export class CourseService {
  private apiServerUrl: string = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public getCoursesOfCategory(categoryTitle:string):Observable<Course[]>{
    return this.http.get<Course[]>(`${this.apiServerUrl}/category/courses/${categoryTitle}`)
  }
}
