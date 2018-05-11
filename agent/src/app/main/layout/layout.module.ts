import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/modules/material.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { ChatToggleComponent } from '@app/main/content/dialogflow/components/chat-toggle/chat-toggle.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    TopNavComponent,
    ChatToggleComponent,
  ],
  exports: [
    TopNavComponent,
    ChatToggleComponent,
  ]
})
export class LayoutModule { }
