import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from '@content/home/containers/home/home.component';
import { AppComponent } from './app.component';

// Modules
import { HomeModule } from '@content/home/home.module';
import { DialogFlowModule } from '@content/dialogflow/dialogflow.module';
import { LayoutModule } from '@app/main/layout/layout.module';
import { GridModule } from '@app/core/modules/grid.module';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
    },
    {
    path: 'home',
    component: HomeComponent
    },
    {
      path: 'agents/prebuilt/faq',
      loadChildren: 'app/main/content/dialogflow/dialogflow.module#DialogFlowModule'
    }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {}),
    HomeModule,
    DialogFlowModule,
    LayoutModule,
    GridModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
