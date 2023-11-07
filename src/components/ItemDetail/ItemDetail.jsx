import "./styles.css";

const ItemDetail = ({ itemSelected }) => {
  return (
    <div className="item__details">
      <div className="card__image">
        <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
      </div>
      <div className="card__description">
        <h1 className="product__title">{itemSelected?.title}</h1>
        <p className="product__description">{itemSelected?.description}</p>
        <p className="product__price">${itemSelected?.price}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
