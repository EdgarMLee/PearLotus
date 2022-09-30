import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../../context/Modal";
import EditProduct from "./EditProduct";
import "./EditProduct.css";

function EditProductModal() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button
        className="editButton clear-button"
        onClick={() => setShowModal(true)}
      >
        Edit Product
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="modal-form">
            <EditProduct closeModal={closeModal} />
          </div>
        </Modal>
      )}
    </>
  );
}

export default EditProductModal;
