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
      {/* logo */}
      <div>
        <Link to={"/"} className="category__btn">
          <h1 className="nav__logo">mmsg Aromas</h1>
        </Link>
      </div>
      {/* navbar */}

      <div>
        <ul className="list__container">
          <li className="item__list">
            <NavLink
              activeclassname="active"
              to={"/category/latas"}
              className="category__btn"
            >
              Aerosoles
            </NavLink>
          </li>
          <li className="item__list">
            <NavLink
              activeclassname="active"
              to={"/category/difusores"}
              className="category__btn"
            >
              Difusores
            </NavLink>
          </li>
          <li className="item__list">
            <NavLink
              activeclassname="active"
              to={"/category/textiles"}
              className="category__btn"
            >
              Textiles
            </NavLink>
          </li>
          <li className="item__list">
            <NavLink
              activeclassname="active"
              to={"/category/sahumerios"}
              className="category__btn"
            >
              Sahumerios
            </NavLink>
          </li>
        </ul>
      </div>
      {/* carrito */}
      <div className="cart__container">
        {/* <CartWidget /> */}
        <NavLink to={"/cart"} className="logo__carrito">
          <CartWidget productQuantity={productQuantity} />
        </NavLink>
      </div>
      {/* setTheme */}
      <div>
        <button
          className="btn__style"
          onClick={() =>
            setTheme((currentValue) =>
              currentValue === "light" ? "dark" : "light"
            )
          }
        >
          Cambia el tema
        </button>
      </div>
    </div>
  );
};

export default Navbar;
