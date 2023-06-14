import { createContext, useContext, useState } from "react";

type ActionCoffeeQuantity = "increment" | "decrement";

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

  addItemToCart: (item: ItemCart) => void;
  deleteItemFromCart: (id: string, size: number) => void;
  changeProductQuantityInCart: (
    id: string,
    size: number,
    type: ActionCoffeeQuantity
  ) => void;
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
      (product) => product.id === item.id && product.size === item.size
    );

    if (alreadyHasItem) {
      const newCartState = cart.products.map((product) => {
        if (product.id === item.id && product.size === item.size) {
          return {
            ...product,
            quantity: product.quantity + item.quantity,
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

  const changeProductQuantityInCart = (
    id: string,
    size: number,
    type: ActionCoffeeQuantity
  ) => {
    const findItem = cart.products.find(
      (product) => product.id === id && product.size === size
    );

    if (type === "decrement" && findItem?.quantity === 1) {
      return deleteItemFromCart(id, size);
    }

    const newProducts = cart.products.map((product) => {
      if (product.id === id && product.size === size) {
        return {
          ...product,
          quantity:
            type === "increment" ? product.quantity + 1 : product.quantity - 1,
        };
      }

      return product;
    });

    setCart({
      count: cart.count,
      priceTotal:
        type === "increment"
          ? cart.priceTotal + findItem?.price!
          : cart.priceTotal - findItem?.price!,
      products: newProducts,
    });
  };

  const deleteItemFromCart = (id: string, size: number) => {
    const item = cart.products.find(
      (product) => product.id === id && product.size === size
    );
    const newProducts = cart.products.filter((product) => {
      if (product.id === id) {
        if (product.size === size) {
          return false;
        }
      }
      return true;
    });

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
        deleteItemFromCart,
        changeProductQuantityInCart,
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
