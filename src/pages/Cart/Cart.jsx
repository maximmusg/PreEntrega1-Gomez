import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import Item from "../../components/Item/Item";
import { Form, Button } from "react-bootstrap";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import "./styles.css";

const Cart = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { products, clear, removeItem } = useContext(CartContext);

  const handleImput = (event) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const validateForm =
    formValue.name === "" || formValue.phone === "" || formValue.email === "";

  const createOrder = (event) => {
    event.preventDefault();
    const db = getFirestore();
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

    addDoc(querySnapshot, newOrder)
      .then((res) => alert("orden creada con exito"))
      .catch((err) => alert("error al crear la orden"));
  };

  return (
    <div>
      <div>
        <h1>Tu carrito de compras:</h1>

        <button onClick={clear}>Vaciar carrito</button>

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
            <Form.Label>Telefono</Form.Label>
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
          <Button
            variant="primary"
            onClick={createOrder}
            type="submit"
            className="confirmar"
            disabled={validateForm}
          >
            Confirmar compra
          </Button>
        </Form>

        {products.length > 0 ? (
          <div className="card__container">
            {products.map(({ title, description, price, image, id }) => (
              <div key={id}>
                <Item
                  title={title}
                  description={description}
                  price={price}
                  image={image}
                />
                <button onClick={() => removeItem(id)}>Eliminar</button>
              </div>
            ))}
          </div>
        ) : (
          <h2>Su carrito se encuentra Vacío</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
