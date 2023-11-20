import { useEffect, useState } from "react";
import CartContext from "./CartContext";
// import CartWidget from "../components/CartWidget/CartWidget";

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);

  const addItem = (product, quantity) => {
    setProducts([...products, { ...product, quantity }]);
  };

  const clear = () => {
    setProducts([]);
  };

  useEffect(() => {
    setProductQuantity(
      products.reduce((acc, product) => acc + product.quantity, 0),
      0
    );
  }, [products]);

  return (
    <CartContext.Provider value={{ products, addItem, productQuantity, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
