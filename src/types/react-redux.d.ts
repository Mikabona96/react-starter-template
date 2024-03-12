import { UseSelector as Selector, UseDispatch as Dispatch } from 'react-redux';
import type { RootState, AppDispatch as RootDispatch } from '@/redux/store';

declare module 'react-redux' {
  export interface UseSelector extends Selector {
    <TState extends StateType = RootState, Selected = unknown>(
      selector: (state: TState) => Selected,
      equalityFnOrOptions?: EqualityFn<Selected> | UseSelectorOptions<Selected>
    ): Selected;
  }

  export interface UseDispatch extends Dispatch {
    <AppDispatch extends DispatchType = RootDispatch>(): AppDispatch;
  }
}
