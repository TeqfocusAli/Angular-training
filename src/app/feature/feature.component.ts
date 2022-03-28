import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, map, Observable, retry, Subscription } from 'rxjs';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent implements OnInit, OnDestroy {
  constructor() {}

  title = 'Angular Observable using RxJs';
  //sub-reff
  private subRef!: Subscription;
  //Observable
  obs = new Observable((observer) => {
    console.log('Observable starts');
    observer.next('1');
    observer.next('2');
    observer.next('3');
    setInterval(() => {
      observer.next('5');
    }, 1000);
  }).pipe(
    filter((data: any) => data > 2), //filter Operator
    map((val) => {
      return (val as number) * 2;
    }) //map operator
  );

  //Promise
  pro = new Promise((resolve, reject) => {
    console.log('Promise starts');
    resolve(11);
  });

  // arrayOfNumber: number[] = [10, 20, 30];
  // observable = from(this.arrayOfNumber);

  ngOnInit(): void {
    //this.obs.subscribe((x) => console.log('x', x));
    //Observable use
    this.subRef = this.obs.subscribe((value) => {
      console.log(value);
    });
    //Promise use
    this.pro.then((value) => console.log(value));
  }

  ngOnDestroy(): void {
    this.subRef.unsubscribe();
  }
}
