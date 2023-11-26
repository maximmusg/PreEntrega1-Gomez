// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles.css";

const Item = ({ title, description, price, image }) => {
  return (
    <div>
      <Card className="card__styles" style={{ width: "18rem" }}>
        <Card.Body className="card__body">
          <Card.Title className="card__title">{title}</Card.Title>
          <Card.Img variant="top" src={image} alt={title} />
          <Card.Text>{description}</Card.Text>
          <h3>${price}</h3>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
