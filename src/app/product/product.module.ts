import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { IndexComponentCategory } from '../category/index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { CreateComponentCategory } from '../category/create/create.component';
import { EditComponentCategory } from '../category/edit/edit.component';
import { ShowComponentCategory } from '../category/show/show.component';
import { CategoryRoutingModule } from '../category/category-routing.module';
import { CurrencyMaskModule } from "ng2-currency-mask";


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    ShowComponent,
    CreateComponentCategory,
    IndexComponentCategory,
    EditComponentCategory,
    ShowComponentCategory
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ]
})
export class ProductModule { }
