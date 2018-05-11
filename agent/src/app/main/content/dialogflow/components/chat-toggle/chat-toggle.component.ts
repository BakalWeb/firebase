import { Component, OnInit } from '@angular/core';
import { ChatStatusService } from '@app/main/content/dialogflow/services/chatstatus.service';
// import { trigger, state, style, transition, animate, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-chat-toggle',
  templateUrl: './chat-toggle.component.html',
  styleUrls: ['./chat-toggle.component.scss'],
  // animations: [
    // trigger('chatLoading', [
    //   transition('void => *', [
    //     query('*', style({ opacity: 0 }), {optional: true}),
    //     query('*', stagger('5000ms', [
    //         animate('10s ease-in', keyframes([
    //             style({opacity: 0,      transform: 'translateY(100%)',    offset: 0       }),
    //             style({opacity: .25,    transform: 'translateY(75%)',     offset: 0.25    }),
    //             style({opacity: .50,    transform: 'translateY(50%)',     offset: 0.5    }),
    //             style({opacity: .75,    transform: 'translateY(25%)',     offset: 0.75    }),
    //             style({opacity: 1,      transform: 'translateY(0)',       offset: 1.0     }),
    //             ]))]), {optional: true}),
    //     ])
    // ])]
})

export class ChatToggleComponent implements OnInit {

  chatText = `Chat`;
  chatStatus = false;

  constructor(private _chatStatusService: ChatStatusService) {}

  ngOnInit() {
    this._chatStatusService.chat_status.subscribe(
      status => {
        this.chatStatus = status;

        if (!status) {
          this.chatText = `Chat`;
        } else {
          this.chatText = `Hide`;
        }
      }
    );
  }


  chatToggle(): void {
    this._chatStatusService.toggleChat(!this.chatStatus);
  }
}
