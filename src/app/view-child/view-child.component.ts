import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent implements OnInit {
  constructor(private route: Router) {}
  viewChildtext: string = 'Data from view child';
  ngOnInit(): void {}
  passUrlData = () => {
    this.route.navigate(['/service', 10]);
  };
  callFromParent = () => {
    console.log('Calling functiion from parent -viewChild');
  };
}
