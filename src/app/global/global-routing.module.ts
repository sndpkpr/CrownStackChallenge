import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GlobalComponent } from './global.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryScreenComponent } from './components/category-screen/category-screen.component';
import { DetailScreenComponent } from './components/detail-screen/detail-screen.component';

const globalRoutes: Routes = [
  {
    path: '',
    component: GlobalComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'category-screen-component',
        component: CategoryScreenComponent,
      },
      {
        path: 'detail-screen-component',
        component: DetailScreenComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(globalRoutes)
  ],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
