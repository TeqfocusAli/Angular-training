import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { SonComponent } from '../son/son.component';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
})
export class FatherComponent implements OnInit, AfterViewInit {
  dataOfChild!: string;
  cityName: string = 'Ranchi';
  //For ngDoCheck
  cityList: string[] = ['Ranchi'];

  @ViewChild(SonComponent) childData!: SonComponent;

  constructor(private cd: ChangeDetectorRef) {}

  getCity(city: any) {
    //console.log(city.value);
    this.cityName = city.value;
    //this.cityList.push(city.value);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataOfChild = this.childData.sonTitle2;
    this.childData.callChildFn();
    this.cd.detectChanges();
  }
}
