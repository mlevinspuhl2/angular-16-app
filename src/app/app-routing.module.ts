import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponentCategory } from './category/index/index.component';


const routes: Routes = [
  { path: 'products', redirectTo: 'product/index', pathMatch: 'full' },
  { path: 'categories', component: IndexComponentCategory },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
