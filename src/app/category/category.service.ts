import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "./category";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class CategoryService {
  private apiServerUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiServerUrl}/category/all`)
  }
}
