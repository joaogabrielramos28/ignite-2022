import { createContext, useContext, useReducer } from "react";
import {
  addNewCoffee,
  changeQuantityCoffee,
  removeCoffee,
} from "../../reducers/cart/actions";
import {
  cartReducer,
  CartState,
  CoffeeCart,
} from "../../reducers/cart/reducer";

interface CartContextProps {
  cart: CartState;
  addCoffeeToCart: (coffee: CoffeeCart) => void;
  removeCoffeeFromCart: (coffee: CoffeeCart) => void;
  changeCoffeeQuantity: (
    coffee: CoffeeCart,
    type: "increment" | "decrement"
  ) => void;
}

const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    cart: [],
    total: 0,
  });

  const addCoffeeToCart = (coffee: CoffeeCart) => {
    dispatch(addNewCoffee(coffee));
  };

  const removeCoffeeFromCart = (coffee: CoffeeCart) => {
    dispatch(removeCoffee(coffee));
  };

  const changeCoffeeQuantity = (
    coffee: CoffeeCart,
    type: "increment" | "decrement"
  ) => {
    dispatch(changeQuantityCoffee(coffee, type));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        changeCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
