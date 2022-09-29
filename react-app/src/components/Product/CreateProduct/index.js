import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../../context/Modal";
import CreateProduct from "./CreateProduct";
import "./CreateProduct.css";

function CreateProductModal() {
  const [showModal, setShowModal] = useState(false);
  const {allProducts} = useSelector((state) => state.products);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="createBox">
        <button className="createButton" onClick={() => setShowModal(true)}>
          Create Product
        </button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="modal-form">
            <CreateProduct closeModal={closeModal} />
          </div>
        </Modal>
      )}
    </>
  );
}

export default CreateProductModal;
