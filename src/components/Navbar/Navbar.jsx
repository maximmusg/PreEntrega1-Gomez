import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div>
        <img src={"./logo.png"} alt="logo" className="image__navbar" />
        <h1>mmsg Aromas</h1>
      </div>

      <div>
        <ul className="list__container">
          <li className="item__list">
            <Link to={"/category/aerosoles"} className="category__btn">
              Aerosoles
            </Link>
          </li>
          <li>
            <Link to={"/category/difusores"} className="category__btn">
              Difusores
            </Link>
          </li>
          <li>
            <Link to={"/category/textiles"} className="category__btn">
              Textiles
            </Link>
          </li>
        </ul>
      </div>
      <div className="cart__container">
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
