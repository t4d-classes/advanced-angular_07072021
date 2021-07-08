import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../../models/categories';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @Input()
  categories: Category[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
