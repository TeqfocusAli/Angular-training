import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ShareDataService } from '../shareData/share-data.service';
import { ViewChildComponent } from '../view-child/view-child.component';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit, AfterViewInit {
  @Input()
  data!: string;
  @ViewChild(ViewChildComponent) child!: ViewChildComponent;
  viewChid!: string;
  urlText!: any;

  constructor(
    private shared: ShareDataService,
    private changeDetect: ChangeDetectorRef,
    private activeRoute: ActivatedRoute
  ) {}
  ngAfterViewInit(): void {
    this.viewChid = this.child.viewChildtext;
    this.changeDetect.detectChanges();
    console.log('view-child', this.child.viewChildtext);
  }
  textData!: string;

  ngOnInit(): void {
    this.urlText = this.activeRoute.snapshot.paramMap.get('id');
    this.textData = this.shared.serviceText;
    console.log('checkservice--', this.shared.serviceText);
  }

  onKey = (event: KeyboardEvent) => {
    console.log((event.target as HTMLInputElement).value);
    //this.urlText = (event.target as HTMLInputElement).value;
    this.child.callFromParent();
  };
}
