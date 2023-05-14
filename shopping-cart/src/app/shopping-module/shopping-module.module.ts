import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingModuleRoutingModule } from './shopping-module-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    ItemDetailComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ShoppingModuleRoutingModule,
    FormsModule
  ]
})
export class ShoppingModuleModule { }
