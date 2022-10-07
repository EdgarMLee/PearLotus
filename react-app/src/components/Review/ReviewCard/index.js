import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteReviewById, getReviews } from "../../../store/review";
import { allReviewsArray } from "../../../store/review";
import { Modal } from "../../../context/Modal";
import EditReview from "../EditReview/EditReview";
import * as defaultIcon from "./defaulticon.png"
import "./ReviewCard.css";

function ReviewCard({ review, product }) {
  const allReviews = useSelector((state) => state.reviews);
  const { reviewId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const handleDeleteReview = async (e, id) => {
    e.preventDefault();
    await dispatch(deleteReviewById(id, review.productId));
  };
  // console.log("review!!!!", review)
  return (
    <>
      <div className="review-card">
        <div className="review-user-container flex">
          <div className="review-user-info">
            <div className="username-date">
            <div className="review-profileimg">
              <img className="user-profileimg" src={review?.user.profileimg ? review.user.profileimg : "https://res.cloudinary.com/dv3qturtv/image/upload/v1665183325/defaulticon.png"}/>
              <div className="review-username">{review?.user?.username}</div>
              </div>
              <div className="review-user-date">
                {new Date(review?.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
        <div className="review-card-content">
          <div className="review-card-user-date">
            <div className="review-stars">
              <div className="stars-rating">{review?.stars}</div>
              <div className="fa-solid fa-star" />
            </div>
          </div>
          <div className="review-text">{review?.description}</div>
          {review?.userId == sessionUser?.id ? (
            <>
              <div className="editDeleteButton">
                <button
                  className="editReviewButton"
                  onClick={() => setShowModal(true)}
                >
                  Edit Review
                </button>
                <button
                  className="delete-rev"
                  onClick={(e) => handleDeleteReview(e, review?.id)}
                >
                  Delete Review
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="modal-form">
            <EditReview review={review} closeModal={closeModal} />
          </div>
        </Modal>
      )}
    </>
  );
}

export default ReviewCard;
