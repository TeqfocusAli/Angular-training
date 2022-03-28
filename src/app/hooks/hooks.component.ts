import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ShareDataService } from '../shareData/share-data.service';
@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'],
})
export class HooksComponent implements OnInit, OnChanges {
  constructor(private shareData: ShareDataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.warn('Calling ngOnChanges');
  }

  ngOnInit(): void {
    console.log(this.shareData.serviceText);
  }
}
