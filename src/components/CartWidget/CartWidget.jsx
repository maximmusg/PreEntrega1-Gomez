import * as Icon from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";

import "./styles.css";

const CartWidget = () => {
  return (
    <div>
      <Icon.Cart4 size={40} />
      <div>
        <Badge className="icon_notify">3</Badge>
      </div>
    </div>
  );
};

export default CartWidget;
