import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Category, NewCategory } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  get collectionUrl() {
    return environment.apiUrl + "/categories";
  }

  public all() {
    return this.httpClient.get<Category[]>(this.collectionUrl);
  }

  public append(category: NewCategory) {
    return this.httpClient.post<Category>(this.collectionUrl, category);
  }
}
