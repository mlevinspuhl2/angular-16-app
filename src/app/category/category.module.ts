import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponentCategory } from '../category/edit/edit.component';
import { ShowComponentCategory } from '../category/show/show.component';


@NgModule({
  declarations: [
    EditComponentCategory,
    ShowComponentCategory
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
