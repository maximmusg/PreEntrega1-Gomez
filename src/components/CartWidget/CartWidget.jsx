import * as Icon from "react-bootstrap-icons";
import "./styles.css";

const CartWidget = () => {
  return (
    <div>
      <Icon.Cart4 size={40} />
      <div>
        <span className="icon_notify">3</span>
      </div>
    </div>
  );
};

export default CartWidget;
