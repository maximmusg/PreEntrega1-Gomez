import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div>
        <img src={"./logo.png"} alt="logo" width={"50%"} />
        {/* <h1>Tienda de Aromas</h1> */}
      </div>
      <div>
        <ul className="list__container">
          <li className="item__list">
            <button className="category__btn">Aerosoles</button>
          </li>
          <li>
            <button className="category__btn">Difusores</button>
          </li>
          <li>
            <button className="category__btn">Textiles</button>
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
