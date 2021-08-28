import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category.service";
import {Category} from "../models/category";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response: Category[]) => {
        this.categories = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
