import Card from "react-bootstrap/Card";
import "./styles.css";

const Item = ({ title, description, price, image }) => {
  return (
    <Card className="card__styles">
      <Card.Body className="card_container">
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Title className="card__title">{title}</Card.Title>
        <div className="card__body">
          <Card.Text>{description}</Card.Text>
          <h3 className="card__price">${price}</h3>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
