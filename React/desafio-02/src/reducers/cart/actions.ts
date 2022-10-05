import { CoffeeCart } from "./reducer";

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
  INCREMENT_NEW_COFFEE = "INCREMENT_NEW_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
}

export function addNewCoffee(newCoffee: CoffeeCart) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  };
}

export function removeCoffee(coffee: CoffeeCart) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffee,
    },
  };
}
