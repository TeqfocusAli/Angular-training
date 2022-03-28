import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShareDataService } from '../shareData/share-data.service';

@Component({
  selector: 'app-mynewcomponent',
  templateUrl: './mynewcomponent.component.html',
  styleUrls: ['./mynewcomponent.component.css'],
})
export class MynewcomponentComponent implements OnInit {
  msg: string = 'hey there msg from child';
  @Output() event = new EventEmitter<string>();
  constructor(private shared: ShareDataService) {}

  serviceText: string = 'Data coming from Serve';
  users!: any;

  ngOnInit(): void {
    this.shared.setMessage(this.serviceText);
    this.shared.getUsers().subscribe((res: any) => {
      this.users = res;
    });
  }

  sendData = () => {
    this.event.emit(this.msg);
  };
}
