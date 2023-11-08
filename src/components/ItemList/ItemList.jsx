import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "./styles.css";

const ItemList = ({ productList }) => {
  return productList.length === 0 ? (
    <Spinner animation="border" role="status" size="xl" className="spinner">
      <span className="visually-hidden ">Loading...</span>
    </Spinner>
  ) : (
    <div className="card__container">
      {productList.map(({ title, description, price, image, id }) => (
        <Link
          className="styles__item"
          to={`/item/${id}`}
          key={id}
          onClick={() => {}}
        >
          <Item
            title={title}
            description={description}
            price={price}
            image={image}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
