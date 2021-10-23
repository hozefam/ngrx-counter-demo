export interface CounterState {
  counter: number;
  text: string;
}

export const initialState: CounterState = {
  counter: 10,
  text: 'NgRx is awesome',
};
