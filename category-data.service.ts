import { Injectable } from '@angular/core';
import {Category} from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {
 
  lastId = 0;

    categories: Category[] = [];

  constructor() { }
  //Simulate POST /categories
  addCategory(category: Category): CategoryDataService{
    if (!category.id){
      category.id = ++this.lastId;

    }
    this.categories.push(category);
    return this;
  }

   // Simulate DELETE /categories/:id
   deleteCategoryById(id: number): CategoryDataService {
    this.categories = this.categories
      .filter(category => category.id !== id);
    return this;
  }

  // Simulate PUT /categories/:id
  updateCategoryById(id: number, values: Object = {}): Category | any {
    let category = this.getCategoryById(id);
    if (!category) {
      return null;
    }
    Object.assign(category, values);
    return category;
  }

  // Simulate GET /categories
  getAllCategories(): Category[] {
    return this.categories;
  }

  // Simulate GET /categories/:id
  getCategoryById(id: number): Category | any{
    return this.categories
      .filter(category => category.id === id)
      .pop();
  }
}
