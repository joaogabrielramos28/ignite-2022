import { createContext, useContext, useState } from "react";
import { CarouselItem } from "../data/types";

export type ItemCart = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  size: number;
};

type CartState = {
  products: ItemCart[];
  count: number;
  priceTotal: number;
};

type CartContextData = {
  cart: CartState;
  removeItemFromCart: (id: string) => void;
  addItemToCart: (item: ItemCart) => void;
  deleteItemFromCart: (id: string) => void;
};

const CartContext = createContext({} as CartContextData);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState({
    count: 0,
    priceTotal: 0,
    products: [],
  } as CartState);

  const addItemToCart = (item: ItemCart) => {
    const alreadyHasItem = cart.products.find(
      (product) => product.id === item.id
    );

    if (alreadyHasItem) {
      const newCartState = cart.products.map((product) => {
        if (product.id === item.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

      setCart({
        count: cart.count,
        priceTotal: cart.priceTotal + Number(item.price),
        products: newCartState,
      });
    } else {
      const newItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        size: item.size,
      };

      setCart({
        count: cart.count + 1,
        priceTotal: cart.priceTotal + Number(item.price) * item.quantity,
        products: [...cart.products, newItem],
      });
    }
  };

  const removeItemFromCart = (id: string) => {
    const findItem = cart.products.find((product) => product.id === id);

    if (findItem?.quantity === 1) {
      const newProducts = cart.products.filter((product) => product.id !== id);

      setCart({
        count: cart.count - 1,
        priceTotal: cart.priceTotal - findItem.price,
        products: newProducts,
      });
    } else {
      const newProducts = cart.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }

        return product;
      });

      setCart({
        count: cart.count,
        priceTotal: cart.priceTotal - findItem?.price!,
        products: newProducts,
      });
    }
  };

  const deleteItemFromCart = (id: string) => {
    const item = cart.products.find((product) => product.id === id);
    const newProducts = cart.products.filter((product) => product.id !== id);

    setCart({
      count: cart.count - 1,
      priceTotal:
        cart.count !== 1
          ? cart.priceTotal - Number(item?.price) * item?.quantity!
          : 0,

      products: newProducts,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
