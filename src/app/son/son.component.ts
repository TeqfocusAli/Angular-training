import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  OnChanges,
  SimpleChanges,
  Input,
  DoCheck,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
})
export class SonComponent
  implements
    OnInit,
    AfterViewInit,
    AfterContentInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  @Input() city!: string;

  @Input() citylist!: string[];
  @ViewChild('title') viewChd!: ElementRef;

  @ViewChildren('title') viewChn!: QueryList<any>;

  //contentChild
  @ContentChild('chHead') cntChild!: ElementRef;

  @ContentChildren('chHead') cntChildList!: QueryList<any>;

  ngAfterContentInit(): void {
    this.cntChild.nativeElement.innerHTML = this.city;
    console.warn('ngAfterContentInit', this.city);
    this.cntChild.nativeElement.style.color = 'pink';

    this.cntChildList.last.nativeElement.style.color = 'yellow';
  }
  ngAfterContentChecked(): void {
    this.cntChild.nativeElement.innerHTML = this.city;
    console.warn('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.warn('ngAfterViewInit:', this.viewChd);
    this.viewChd.nativeElement.innerHTML = this.city;
    //viewChild
    this.viewChd.nativeElement.style.color = 'red';
    console.log(this.viewChn);
    // viewChildren
    //apply change to 1st or last
    this.viewChn.first.nativeElement.style.fontSize = '50px';
    this.viewChn.last.nativeElement.style.fontSize = '50px';
    //apply change to more then one
    this.viewChn.map((m) => {
      m.nativeElement.style.color = 'red';
    });
  }

  ngAfterViewChecked(): void {
    console.warn('ngAfterViewChecked:', this.viewChd);
    this.viewChd.nativeElement.innerHTML = this.city;
  }

  //@viewChild
  sonTitle: string = 'Data from child component';
  sonTitle2: string = 'Data2 from child component';

  callChildFn() {
    console.log('Heloo world2');
  }
  //-----------

  counterInterval!: any;
  counter: number = 0;
  constructor() {
    console.warn('constructor-calls');
    this.counterInterval = setInterval(() => {
      console.warn(this.counter++);
    }, 1000);
  }
  //Hooks
  ngOnChanges(changes: SimpleChanges): void {
    console.warn('onChange hook:', changes);
  }

  ngOnInit(): void {
    console.warn('ngOnInt-hooks:', this.city);
  }
  ngDoCheck(): void {
    console.warn('ngDoCheck', this.citylist);
  }

  ngOnDestroy(): void {
    console.warn('ngOnDestroy--');
    clearInterval(this.counterInterval);
  }
}
