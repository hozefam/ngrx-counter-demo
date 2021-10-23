import { Component, OnInit } from '@angular/core';
import { changetext, customIncrement } from './../state/counter.actions';

import { CounterState } from './../state/counter.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getText } from './../state/counter.selectors';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  text$ = new Observable<string>();

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeText() {
    this.store.dispatch(changetext());
  }

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.text$ = this.store.select(getText);
  }
}
