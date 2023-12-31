import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from '../category/show/show.component';
import { EditComponent } from '../category/edit/edit.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: '', redirectTo: 'product/index', pathMatch: 'full'},
  { path: 'product', redirectTo: 'product/index', pathMatch: 'full'},
  { path: 'product/index', component: IndexComponent },
  { path: 'category/:id/show', component: ShowComponent },
  { path: 'category/:id/edit', component: EditComponent },
  { path: 'product/create', component: CreateComponent },
  { path: 'product/:id/edit', component: EditComponent },
  { path: 'product/:id/show', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
