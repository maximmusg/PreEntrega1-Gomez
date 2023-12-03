import Card from "react-bootstrap/Card";
import "./styles.css";

const Item = ({ title, description, price, image }) => {
  return (
    <div>
      <Card className="card__styles" style={{}}>
        <Card.Body className="card_container">
          <Card.Img variant="top" src={image} alt={title} />
          <Card.Title className="card__title">{title}</Card.Title>
          <div className="card__body">
            <Card.Text>{description}</Card.Text>
            <h3 className="card__price">${price}</h3>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
