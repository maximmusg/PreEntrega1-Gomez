import { Modal, Button } from "react-bootstrap";
import "./styles.css";

const CheckOutModal = ({ show, handleClose, orderID, totalCarrito }) => {
  console.log(`total en carrito: ${totalCarrito}`);
  return (
    <div>
      <Modal
        className="modal__checkout"
        centered
        show={show}
        size="lg"
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal__title">
            ¡Su compra fue completada con éxito!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            Número de orden: <span>{orderID}</span>
          </h4>
          <h3>Su total a pagar es de: ${totalCarrito}</h3>
          <p>Recibira las instricciones del pago en su Correo Electronico </p>
          <h5 className="">¡Muchas Gracias!</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CheckOutModal;
