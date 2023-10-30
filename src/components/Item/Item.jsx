// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles.css";

const Item = ({ name, description, price, image }) => {
  return (
    <div>
      <Card className="card__body" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h3>{price}</h3>
          <Card.Text>{description}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
