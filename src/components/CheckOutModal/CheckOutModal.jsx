import { Modal, Button } from "react-bootstrap";
import "./styles.css";

const CheckOutModal = ({
  show,
  handleClose,
  orderID,
  totalCarrito,
  orderDate,
}) => {
  console.log(`total en carrito: ${totalCarrito}`);
  return (
    <>
      <Modal
        className="modal__checkout"
        centered
        show={show}
        size="lg"
        onHide={handleClose}
      >
        <Modal.Header className="modal__header">
          <Modal.Title className="modal__title">
            ¡Su compra fue completada con éxito!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal__body">
          <h4>
            Número de orden:{""}
            <span className="modal__orderID"># {orderID}</span>
          </h4>
          <p>Fecha de compra: {orderDate.toLocaleDateString()}</p>
          <h3>
            Su total a pagar es de:{" "}
            <span className="modal__price"> ${totalCarrito}</span>
          </h3>
          <p className="modal__instructions">
            Recibirá las instrucciones del pago en su Correo Electrónico{" "}
          </p>
          <h5 className="modal__thnx">¡Muchas Gracias!</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn__styleCartDelete"
            variant="secondary"
            onClick={handleClose}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CheckOutModal;
