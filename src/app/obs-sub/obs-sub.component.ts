import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  of,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-obs-sub',
  templateUrl: './obs-sub.component.html',
  styleUrls: ['./obs-sub.component.css'],
})
export class ObsSubComponent implements OnInit {
  constructor() {}

  //subject
  subj = new Subject();

  //BehaviorSubject subject
  bhvSubj = new BehaviorSubject<number>(10);

  replySubj = new ReplaySubject(1);

  obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
    map((userResponse) => {
      return userResponse;
    }), //console.log('users: ', userResponse)),
    catchError((error) => {
      console.log('error: ', error);
      return of(error);
    })
  );

  ngOnInit(): void {
    //Observable unicast
    /* this.obs$.subscribe((val) => console.log(val));
    this.obs$.subscribe((val) => console.log(val));
    this.obs$.subscribe((val) => console.log(val));
    */
    // Observable with multicast
    //data provider
    /*this.subj.subscribe((val) => console.log(val));
    this.subj.subscribe((val) => console.log(val));
    // this.subj.next(this.obs$);
    this.subj.next(Math.random());*/
    //Data consumer
    /*this.obs$.subscribe(this.subj);
      this.subj.subscribe((val) => console.log(val));
      this.subj.subscribe((val) => console.log(val));
      this.subj.subscribe((val) => console.log(val));
    */
    //BehaviorSubject
    /* this.bhvSubj.subscribe((val) => console.log(val));
       this.bhvSubj.next(111);
       this.bhvSubj.subscribe((val) => console.log(val));
    */
    //ReplaySubject use to show buffer
    /*this.replySubj.subscribe((val) => console.log(val));
      this.replySubj.next(1);
      this.replySubj.next(2);
      this.replySubj.next(3);
      this.replySubj.next(4);
      this.replySubj.subscribe((val) => console.log(val));*/
  }
}
