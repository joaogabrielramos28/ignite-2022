import { ActionTypes } from "./actions";
import { produce } from "immer";
export interface CoffeeCart {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
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
    case ActionTypes.REMOVE_COFFEE:
      return produce(state, (draft) => {
        const coffee = action.payload.coffee;

        const coffeeIndex = state.cart.findIndex(
          (coffee) => coffee.id === coffee.id
        );

        draft.cart.splice(coffeeIndex, 1);
        draft.total -= coffee.count * coffee.price;
      });

    case ActionTypes.CHANGE_COFFEE_QUANTITY:
      return produce(state, (draft) => {
        const type = action.payload.type;
        const coffee = action.payload.coffee;

        const coffeeIndex = state.cart.findIndex(
          (coffee) => coffee.id === coffee.id
        );

        draft.cart[coffeeIndex].count =
          type === "increment"
            ? draft.cart[coffeeIndex].count + 1
            : draft.cart[coffeeIndex].count - 1;
      });

    case ActionTypes.RESET_CART:
      return produce(state, (draft) => {
        draft.cart = [];
        draft.total = 0;
      });

    default:
      return state;
  }
}
