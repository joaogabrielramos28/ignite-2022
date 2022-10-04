import { createContext, useContext, useReducer } from "react";
import { addNewCoffee } from "../../reducers/cart/actions";
import { cartReducer, CoffeeCart } from "../../reducers/cart/reducer";

interface CartContextProps {
  addCoffeeToCart: (coffee: CoffeeCart) => void;
}

const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    total: 0,
  });

  console.log(cartState);

  const addCoffeeToCart = (coffee: CoffeeCart) => {
    dispatch(addNewCoffee(coffee));
  };

  return (
    <CartContext.Provider value={{ addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
