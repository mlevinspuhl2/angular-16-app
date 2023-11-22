import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: 'category/index', component: IndexComponent },
  { path: 'category/:id/show', component: ShowComponent },
  { path: 'category/:id/edit', component: EditComponent },
  { path: 'category/create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
