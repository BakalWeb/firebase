import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeModule } from './main/content/home/home.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/content/home/containers/home/home.component';


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
    },
    {
    path: 'home',
    component: HomeComponent
    },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot(appRoutes, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
