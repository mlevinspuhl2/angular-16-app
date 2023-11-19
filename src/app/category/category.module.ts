import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*import { ProductRoutingModule } from './product-routing.module';*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
//import { EditComponent } from './edit/edit.component';
//import { ShowComponent } from './show/show.component';
import { EditComponentCategory } from '../category/edit/edit.component';
import { ShowComponentCategory } from '../category/show/show.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    //EditComponent,
    //ShowComponent,
    EditComponentCategory,
    ShowComponentCategory
  ],
  imports: [
    CommonModule,
    //ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
