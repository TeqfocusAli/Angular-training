import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}
  //two way data binding
  userName: string = 'Ravi Kumar';

  isSpecial: boolean = false;

  aboutTitle: string = 'Text from Comp';

  currentStyles = {
    'font-style': 'italic',
    'font-weight': 'bold',
    'font-size': '24px',
    color: '#ff0b0b',
  };

  condition: boolean = false;
  ngOnInit(): void {}

  items: string[] = ['item1', 'item2', 'item3'];

  currentItem = {
    feature: 'slim',
  };
}
