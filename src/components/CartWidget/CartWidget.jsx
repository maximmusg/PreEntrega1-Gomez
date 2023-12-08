import * as Icon from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";

import "./styles.css";

const CartWidget = ({ productQuantity }) => {
  return (
    <div className="icon__cart">
      <Icon.Cart4 size={40} />
      <div>
        <Badge bg="danger" className="icon_notify">
          {productQuantity}
        </Badge>
      </div>
    </div>
  );
};

export default CartWidget;
