import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './category/index/index.component';


const routes: Routes = [
  { path: 'products', redirectTo: 'product/index', pathMatch: 'full' },
  { path: 'categories', component: IndexComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
