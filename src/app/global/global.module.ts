import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../library/shared/shared.module';

import { GlobalComponent } from './global.component';
import { GlobalRoutingModule } from './global-routing.module';

import { HomeComponent } from './components/home/home.component';
import { CategoryScreenComponent } from './components/category-screen/category-screen.component';
import { DetailScreenComponent } from './components/detail-screen/detail-screen.component';

@NgModule({
  declarations: [GlobalComponent,
    HomeComponent,
    CategoryScreenComponent,
    DetailScreenComponent],
  imports: [
    CommonModule,
    SharedModule,
    GlobalRoutingModule
  ]
})
export class GlobalModule { }
