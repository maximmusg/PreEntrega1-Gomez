import "./styles.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemDetail = ({ itemSelected }) => {
  const [count, setCount] = useState(0);
  const stock = 5;

  return (
    <div className="item__details">
      <div className="card__image">
        <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
      </div>
      <div className="card__description">
        <h1 className="product__title">{itemSelected?.title}</h1>
        <p className="product__description">{itemSelected?.description}</p>
        <p className="product__price">${itemSelected?.price}</p>
        <span>Stock: {stock}</span>
        <div>
          <button className="btn btn-primary">Finalizar compra</button>
          <ItemCount count={count} setCount={setCount} stock={stock} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
