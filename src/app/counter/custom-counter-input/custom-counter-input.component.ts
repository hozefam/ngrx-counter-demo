import { Component, OnInit } from '@angular/core';

import { CounterState } from './../state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement } from './../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {}
}
