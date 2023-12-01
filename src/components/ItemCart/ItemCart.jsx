import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "./styles.css";

const ItemCart = ({
  title,
  description,
  price,
  image,
  quantity,
  action,
  textButton,
}) => {
  return (
    <div>
      <Card className="cardInCart">
        <Card.Img
          className="cart__card__img"
          variant="top"
          src={image}
          alt={title}
        />
        <Card.Body className="Cart__card__body">
          <Card.Title>{title}</Card.Title>
          {/* <Card.Text>{description}</Card.Text> */}
          <h3>${price}</h3>
          <div className="cart__options">
            <div>{quantity && <span>Cantidad: {quantity}</span>}</div>
            <div>
              {action && textButton && (
                <Button onClick={() => action()}>{textButton}</Button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCart;
