import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../category.service";
import {Category} from "../category";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
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
