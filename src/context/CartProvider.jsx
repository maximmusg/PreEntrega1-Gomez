import { useEffect, useState } from "react";
import CartContext from "./CartContext";
// import CartWidget from "../components/CartWidget/CartWidget";

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);

  // const saveInLocalStorage = (products) => {
  //   localStorage.setItem("products", JSON.stringify(products));
  // };

  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      const newProducts = products.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setProducts(newProducts);
    } else {
      setProducts([...products, { ...product, quantity }]);
    }
  };

  const clear = () => {
    setProducts([]);
  };

  const removeItem = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const isInCart = (id) => {
    return products.some((product) => product.id === id);
  };

  useEffect(() => {
    setProductQuantity(
      products.reduce((acc, product) => acc + product.quantity, 0),
      0
    );
  }, [products]);

  return (
    <CartContext.Provider
      value={{ products, addItem, productQuantity, clear, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
