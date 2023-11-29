import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "./styles.css";

const Item = ({
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
      <Card className="card__styles" style={{ width: "18rem" }}>
        <Card.Body className="card__body">
          <Card.Title className="card__title">{title}</Card.Title>
          <Card.Img variant="top" src={image} alt={title} />
          <Card.Text>{description}</Card.Text>
          <h3>${price}</h3>
          {quantity && <span>Cantidad: {quantity}</span>}
          {action && textButton && (
            <Button onClick={() => action()}>{textButton}</Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
