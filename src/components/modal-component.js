import React from "react";
import Modal from "react-modal";
// import AccordionHelp from "../screens/login/components/accordion-help";

const customStyles = {
  content: {
    width: "480px",
    height: "85%",
    overflowY: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalComponent = ({ show, handleClose, afterOpenModal, children }) => {
  return (
    <Modal
      isOpen={show}
      onAfterOpen={afterOpenModal}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button
        onClick={handleClose}
        type="button"
        style={{
          border: "1px",
          float: "right",
          borderRadius: "6px",
          backgroundRepeat: "no-repeat",
          borderColor: "transparent",
          borderWidth: "1px",
          height: "20px",
          width: "20px",
        }}
      >
        x
      </button>
      {children}
      <button
        onClick={handleClose}
        style={{
          marginTop: "3px",
          width: "480px",
          height: "40px",
          BorderColor: "gray",
          backgroundColor: "white",
          color: "gray",
        }}
      >
        Close
      </button>
    </Modal>
  );
};

export default ModalComponent;
