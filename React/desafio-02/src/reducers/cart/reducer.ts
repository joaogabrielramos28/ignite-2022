import { ActionTypes } from "./actions";
import { produce } from "immer";
export interface CoffeeCart {
  id: number;
  name: string;
  price: number;
  count: number;
}

export interface CartState {
  cart: CoffeeCart[];
  total: number;
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      const coffeeExistsInCart = state.cart.findIndex(
        (coffee) => coffee.id === action.payload.newCoffee.id
      );

      if (coffeeExistsInCart >= 0) {
        return produce(state, (draft) => {
          const item = draft.cart[coffeeExistsInCart];
          draft.cart[coffeeExistsInCart].count =
            item.count + action.payload.newCoffee.count;
          draft.total =
            draft.cart[coffeeExistsInCart].count *
            draft.cart[coffeeExistsInCart].price;
        });
      } else {
        return produce(state, (draft) => {
          draft.cart.push(action.payload.newCoffee);
          draft.total +=
            action.payload.newCoffee.price * action.payload.newCoffee.count;
        });
      }

    default:
      return state;
  }
}
