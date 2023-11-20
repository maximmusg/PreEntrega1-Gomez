import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import CartContext from "../../context/CartContext";

const Navbar = () => {
  const { setTheme } = useContext(ThemeContext);
  const { productQuantity } = useContext(CartContext);
  return (
    <div className="navbar__container">
      <div>
        <NavLink to={"/"} className="category__btn">
          {/* <img src={"./logo.png"} alt="logo" className="image__navbar" /> */}
          <h1>mmsg Aromas</h1>
        </NavLink>
      </div>

      <div>
        <ul className="list__container">
          <li className="item__list">
            <NavLink
              activeclassname="active"
              to={"/"}
              className="category__btn btn__home"
            >
              Home
            </NavLink>
          </li>
          <li className="item__list">
            <NavLink
              activeclassname="active"
              to={"/category/electronics"}
              className="category__btn"
            >
              Electronicos
            </NavLink>
          </li>
          <li>
            <NavLink
              activeclassname="active"
              to={"/category/jewelery"}
              className="category__btn"
            >
              Joyas
            </NavLink>
          </li>
          <li>
            <NavLink
              activeclassname="active"
              to={"/category/men's-clothing"}
              className="category__btn"
            >
              Ropa de hombre
            </NavLink>
          </li>
          <li>
            <NavLink
              activeclassname="active"
              to={"/category/women's-clothing"}
              className="category__btn"
            >
              Ropa de Mujer
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="cart__container">
        <CartWidget />
        <Link to={"/cart"}>
          <h3>productos : {productQuantity}</h3>
        </Link>
        <button
          onClick={() =>
            setTheme((currentValue) =>
              currentValue === "light" ? "dark" : "light"
            )
          }
        >
          {" "}
          Cambia el tema{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
