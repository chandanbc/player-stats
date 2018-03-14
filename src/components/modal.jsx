import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';


const ModalContainer = ({ title, children, modalVisible,
    close }) => {
  return (
    <BootstrapModal show={modalVisible} onHide={evt => close()}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>
          {title}
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        {children}
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button id="ok-button" onClick={evt => close()}>
         Ok
        </Button>
      
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};


export default ModalContainer;