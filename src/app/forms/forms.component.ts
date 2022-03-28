import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // onSubmit(form: any) {
  //   console.log(form.value);
  // }

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Ali', this.powers[0], 'Overstreet');

  submitted = false;

  onSubmit(form: any) {
    console.log(form.value);
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
