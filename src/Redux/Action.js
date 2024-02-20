import { decrement, increment, incrementByAmount } from "./Slices/DataSlices";
import { Store } from "./Store";

export function increase() {
  Store.dispatch(increment());
}

export function decrease() {
  Store.dispatch(decrement());
}

export function increaseAmount(amount) {
  Store.dispatch(incrementByAmount(amount));
}
