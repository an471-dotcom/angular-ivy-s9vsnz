import { Component, OnInit } from '@angular/core';
import { user } from './user';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  submited = false;
  model = new user('', '', '', '');
  regions = [
    'Western Europe',
    'Central and Eastern Europe',
    'Asia',
    'Africa',
    'Mediterranean & Middle East.',
  ];
  onSubmit() {
    this.submited = true;
  }
  ngOnInit() {}
}
