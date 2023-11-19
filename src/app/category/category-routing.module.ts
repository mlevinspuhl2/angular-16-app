import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponentCategory } from './index/index.component';
import { CreateComponentCategory } from './create/create.component';
import { EditComponentCategory } from './edit/edit.component';
import { ShowComponentCategory } from './show/show.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'product/index', pathMatch: 'full'},
  //{ path: 'product', redirectTo: 'product/index', pathMatch: 'full'},
  { path: 'category/index', component: IndexComponentCategory },
  { path: 'category/:id/show', component: ShowComponentCategory },
  { path: 'category/:id/edit', component: EditComponentCategory },
  { path: 'category/create', component: CreateComponentCategory },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
