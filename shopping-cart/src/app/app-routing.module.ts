import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingModuleModule } from './shopping-module/shopping-module.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => ShoppingModuleModule
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
