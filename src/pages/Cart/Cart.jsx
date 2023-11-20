import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import Item from "../../components/Item/Item";
import "./styles.css";

const Cart = () => {
  const { products, clear, removeItem } = useContext(CartContext);

  return (
    <div>
      <div>
        <h1>Tu carrito de compras:</h1>
        <button onClick={clear}>Vaciar carrito</button>

        {products.length > 0 ? (
          <div className="card__container">
            {products.map(({ title, description, price, image, id }) => (
              <div key={id}>
                <Item
                  title={title}
                  description={description}
                  price={price}
                  image={image}
                />
                <button onClick={() => removeItem(id)}>Eliminar</button>
              </div>
            ))}
          </div>
        ) : (
          <h2>Su carrito se encuentra Vacío</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
