import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ChatStatusService {

  public chat_status: Subject<boolean> = new Subject();

  constructor() {
    this.chat_status.next(false);
  }

  toggleChat(status: boolean) {
    this.chat_status.next(status);
}

}
