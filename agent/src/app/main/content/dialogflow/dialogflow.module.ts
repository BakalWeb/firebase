import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AgentFaqPrebuiltComponent } from '@content/dialogflow/containers/prebuilt/agent-faq-prebuilt/agent-faq-prebuilt.component';
import { AgentBakalWebAgentComponent } from '@content/dialogflow/containers/custom/agent-bakalwebagent/agent-bakalwebagent.component';
import { MaterialModule, GridModule } from '@app/core/modules/styling.index';
import { ChatStatusService } from '@app/main/content/dialogflow/services/chatstatus.service';

export const routes: Routes = [
  {
    path     : 'agents/prebuilt/faq',
    component: AgentFaqPrebuiltComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    GridModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    AgentFaqPrebuiltComponent,
    RouterModule
  ],
  providers: [ChatStatusService],
  declarations: [
    AgentFaqPrebuiltComponent,
    AgentBakalWebAgentComponent,
  ],
})
export class DialogFlowModule { }
