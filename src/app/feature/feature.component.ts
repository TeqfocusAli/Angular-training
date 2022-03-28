import { Component, OnInit } from '@angular/core';
import { filter, from, map, Observable } from 'rxjs';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent implements OnInit {
  constructor() {}

  title = 'Angular Observable using RxJs';
  //Observable
  obs = new Observable((observer) => {
    console.log('Observable starts');
    observer.next('1');
    observer.next('2');
    observer.next('2');
  }).pipe(
    filter((data: any) => data > 1), //filter Operator
    map((val) => {
      return (val as number) * 2;
    }) //map operator
  );

  //Promise
  pro = new Promise((resolve, reject) => {
    console.log('Promise starts');
    resolve(10);
  });

  arrayn: number[] = [10, 20, 30];
  observable = from(this.arrayn);

  ngOnInit(): void {
    // this.observable.subscribe((x) => console.log('x', x));
    // Observable use
    this.obs.subscribe((value) => {
      console.log(value);
    });
    /*  this.obs.subscribe().unsubscribe();
    //Promise use
    this.pro.then((value) => console.log(value));*/
  }
}
