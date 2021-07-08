import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NewCategory } from '../../models/categories';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  public categoryForm!: FormGroup;

  @Output()
  submitForm = new EventEmitter<NewCategory>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categoryName: "",
      description: "",
    });
  }

  doSubmitForm() {
    this.submitForm.emit(this.categoryForm.value as NewCategory);
  }

}
