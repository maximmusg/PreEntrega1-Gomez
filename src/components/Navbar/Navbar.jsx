import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div>
        <Link to={"/"} className="category__btn">
          {/* <img src={"./logo.png"} alt="logo" className="image__navbar" /> */}
          <h1>mmsg Aromas</h1>
        </Link>
      </div>

      <div>
        <ul className="list__container">
          <li className="item__list">
            <Link to={"/"} className="category__btn">
              Home
            </Link>
          </li>
          <li className="item__list">
            <Link to={"/category/electronics"} className="category__btn">
              Electronicos
            </Link>
          </li>
          <li>
            <Link to={"/category/jewelery"} className="category__btn">
              Joyas
            </Link>
          </li>
          <li>
            <Link to={"/category/men's-clothing"} className="category__btn">
              Ropa de hombre
            </Link>
          </li>
          <li>
            <Link to={"/category/women's-clothing"} className="category__btn">
              Ropa de Mujer
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
