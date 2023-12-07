import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";

import ItemCart from "../../components/ItemCart/ItemCart";
import CheckOutModal from "../../components/CheckOutModal/CheckOutModal";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  writeBatch,
} from "firebase/firestore";
import "./styles.css";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const [orderID, setOrderID] = useState(null);
  const [orderDate, setOrderDate] = useState(null);

  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { products, clear, removeItem } = useContext(CartContext);

  const navigate = useNavigate();

  const db = getFirestore();

  const colorTheme = useContext(ThemeContext);

  const handleImput = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const validateForm =
    formValue.name === "" || formValue.phone === "" || formValue.email === "";

  const createOrder = (event) => {
    event.preventDefault();
    const querySnapshot = collection(db, "orders");

    const newOrder = {
      buyer: formValue,
      items: products.map((product) => {
        return {
          title: product.title,
          price: product.price,
          id: product.id,
          quantity: product.quantity,
        };
      }),
      Date: new Date(),
      total: products.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      ),
    };

    setOrderDate(newOrder.Date);

    addDoc(querySnapshot, newOrder)
      .then((res) => {
        updateProductStock();
        setOrderID(res.id);
        setShowModal(true);
      })
      .catch((err) => alert("error al crear la orden"));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
    clear();
  };

  const updateProductStock = () => {
    const batch = writeBatch(db);
    products.forEach((product) => {
      const querySnapshot = doc(db, "products", product.id);
      batch.update(querySnapshot, {
        stock: product.stock - product.quantity,
      });
    });
    batch.commit().then((res) => console.log("Stock actualizado"));
  };

  const totalCarrito = products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <div
      style={{
        color: colorTheme.theme === "light" ? "black" : "white",

        backgroundColor: colorTheme.theme === "light" ? "#D9AB9A" : "#302927",
      }}
      className="cart"
    >
      <h1 className="cart__title">Tu carrito de compras:</h1>
      <div className="Cart__container">
        <div className="cart__detail">
          {products.length > 0 ? (
            <div className="card__cart">
              {products.map(
                ({ title, description, price, image, id, quantity }) => (
                  <div key={id} className="cart__product">
                    <div className="item__cart">
                      <ItemCart
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        image={image}
                        quantity={quantity}
                        action={() => removeItem(id)}
                        textButton="Eliminar"
                      />
                      <h5>Subtotal: ${price * quantity}</h5>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div>
              <h2 className="cart__empty">Su carrito se encuentra Vacío</h2>
              <Link to={"/"}>
                <button className="btn__styleCart">Ver Productos</button>
              </Link>
            </div>
          )}
        </div>
        <div className="cart__finish">
          <Form className="form">
            <Form.Group className="mb-3 formulario">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={formValue.name}
                onChange={handleImput}
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3 formulario">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu teléfono"
                value={formValue.phone}
                onChange={handleImput}
                name="phone"
              />
            </Form.Group>

            <Form.Group className="mb-3 formulario">
              <Form.Label>Direccion de E-Mail</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu correo electrónico"
                value={formValue.email}
                onChange={handleImput}
                name="email"
              />
            </Form.Group>
            <h4 className="total__carrito">Total: {totalCarrito}</h4>

            <Button
              variant="primary"
              onClick={createOrder}
              type="submit"
              className="btn__styleCart"
              disabled={validateForm || products.length === 0}
            >
              Confirmar compra
            </Button>
            {showModal && (
              <CheckOutModal
                show={showModal}
                handleClose={handleCloseModal}
                orderID={orderID}
                totalCarrito={totalCarrito}
                orderDate={orderDate}
              />
            )}
          </Form>

          <div>
            <button
              className="btn__styleCartDelete btn__delete__all"
              onClick={clear}
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
