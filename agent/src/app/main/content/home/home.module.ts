import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { MaterialModule } from '../../../core/modules/material.module';

const routes: Routes = [
  {
    path     : 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    HomeComponent,
  ],
  providers: [],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
