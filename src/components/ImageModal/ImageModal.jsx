//import React from "react";
import css from "./ImageModal.module.css";
import Modal from "react-modal";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
    overflow: "visible",
    height: "auto",
    width: "auto",
  },
};

Modal.setAppElement("#root");
export default function ImageModal({ image, isOpen, isClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={isClose} style={customStyles}>
      <img className={css.img} src={image} alt="Large" />
    </Modal>
  );
}
