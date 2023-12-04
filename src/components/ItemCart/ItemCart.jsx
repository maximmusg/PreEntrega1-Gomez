import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const ItemCart = ({
  id,
  title,
  price,
  image,
  quantity,
  action,
  textButton,
  // actionDetails,
  // textDetailsButton,
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
                <Button
                  className="btn__styleCartDelete"
                  onClick={() => action()}
                >
                  {textButton}
                </Button>
              )}
            </div>
            <div>
              <Link to={`/item/${id}`}>
                <Button className="btn__styleDetail">Ver detalles</Button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCart;
