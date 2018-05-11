import { Component, OnInit } from '@angular/core';
import { ChatStatusService } from '@app/main/content/dialogflow/services/chatstatus.service';
import { trigger, state, style, transition, animate, query, stagger, keyframes, useAnimation } from '@angular/animations';
import { jackInTheBox, flash, rubberBand } from 'ng-animate';

@Component({
  selector: 'app-agent-faq-prebuilt',
  templateUrl: './agent-faq-prebuilt.component.html',
  styleUrls: ['./agent-faq-prebuilt.component.scss'],
  animations: [
    trigger('chatStatusIn', [
      transition( 'void => * , * => void', useAnimation(jackInTheBox)),
      transition('* => void', useAnimation(rubberBand))
    ]),
  ]
})
export class AgentFaqPrebuiltComponent implements OnInit {

  chatStatus = false;
  constructor(private _chatStatusService: ChatStatusService) { }

  ngOnInit() {
    this._chatStatusService.chat_status.subscribe(
        status => {
          this.chatStatus = status;
        }
    );
  }
}
