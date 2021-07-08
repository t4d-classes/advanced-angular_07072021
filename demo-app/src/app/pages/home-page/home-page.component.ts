import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Category, NewCategory } from 'src/app/categories/models/categories';
import { CategoriesService } from 'src/app/categories/services/categories.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoriesSvc: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.categories = this.route.snapshot.data.categories as Category[];
  }

  doRefreshCategories() {
    this.categoriesSvc.all().subscribe(categories => {
      this.categories = categories;
    });
  }

  doAddAndRefreshCategories(category: NewCategory) {
    this.categoriesSvc
      .append(category)
      .pipe(switchMap(() => this.categoriesSvc.all()))
      .subscribe(categories => {
        this.categories = categories;
      })
  }

}
