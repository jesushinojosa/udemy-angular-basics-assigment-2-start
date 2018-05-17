import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  private username = '';
  private disable_button = true;

  constructor() {
    this.disable_button = true;
  }

  ngOnInit() {
  }
  onInput(event: Event) {
    this.disable_button = this.username === '';
  }
  onClick(event: Event) {
    this.username = '';
    this.disable_button = true;
  }
}
