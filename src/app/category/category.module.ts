import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from '../category/category-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from '../category/index/index.component';
import { CreateComponent } from '../category/create/create.component';
import { EditComponent } from '../category/edit/edit.component';
import { ShowComponent } from '../category/show/show.component';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';



@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    ShowComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTrimDirectiveModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
