import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { CurrencyMaskModule } from "ng2-currency-mask";
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
    NgMaterialModule,
    ProductRoutingModule,
    NgxTrimDirectiveModule,
    CurrencyMaskModule
  ]
})
export class ProductModule { }
