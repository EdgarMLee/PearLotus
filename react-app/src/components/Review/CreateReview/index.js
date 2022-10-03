import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from '../../../context/Modal';
import { useSelector } from 'react-redux';
import CreateReview from './CreateReview';
import { allProductsObj } from '../../../store/product';
import "./CreateReview.css";

function CreateReviewModal() {
  let currentUser;
  const { productId } = useParams();
  const productsObj = useSelector(allProductsObj);
  const product = productsObj[Number(productId)];
  const [showModal, setShowModal] = useState(false);
  const allReviews = useSelector(state => state.reviews);
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() => {
    setShowModal(false);
  }, [allReviews])

  if (sessionUser && product) {
    if (sessionUser.id === product.owner_id) {
      currentUser = false;
    } else currentUser = true;
  }

  return (
    <>
      {currentUser && (
        <button className='writeReviewButton' onClick={() => setShowModal(true)}>
        Write Review
        </button>
        )}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReview />
        </Modal>
      )}
    </>
  );
}

export default CreateReviewModal;
