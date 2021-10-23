import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter$: Observable<CounterState> = new Observable();

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }

  ngOnDestroy() {}
}
