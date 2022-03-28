import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angualr-app';
  message = 'Message from parent';
  msgFromChild!: string;

  messageFromChild = ($event: any) => {
    this.msgFromChild = $event;
  };
  callPhone(val: any) {
    alert(val);
  }
}
