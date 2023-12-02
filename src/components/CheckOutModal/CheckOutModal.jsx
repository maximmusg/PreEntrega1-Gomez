import React from "react";
import { Modal, Button } from "react-bootstrap";

const CheckOutModal = ({ show, handleClose, orderID }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Su compra fue completada con éxito!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Número de orden: {orderID}</p>
          {/* Puedes mostrar más detalles de la orden si es necesario */}
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
