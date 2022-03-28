import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  //from with formControl
  name = new FormControl('Ali');
  email = new FormControl('Ali@teqfocus.com');

  updateName() {
    this.name.setValue('Nancy');
  }

  //From wtih FormGroup
  profileForm = new FormGroup({
    firstName: new FormControl('Anjali'),
    lastName: new FormControl('kumari'),
  });

  //NestedFormGroup
  nestedProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl('Ranchi'),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  //Fom Builder
  formBuilderProfileForm: FormGroup = this.fb.group({
    firstName: ['', Validators.minLength(4)],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  updateProfile() {
    this.nestedProfileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
