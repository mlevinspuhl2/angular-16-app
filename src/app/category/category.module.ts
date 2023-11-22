import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponentCategory } from '../category/index/index.component';
import { CreateComponentCategory } from '../category/create/create.component';
import { EditComponentCategory } from '../category/edit/edit.component';
import { ShowComponentCategory } from '../category/show/show.component';
import { CategoryRoutingModule } from '../category/category-routing.module';


@NgModule({
  declarations: [
    IndexComponentCategory,
    CreateComponentCategory,
    EditComponentCategory,
    ShowComponentCategory

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
