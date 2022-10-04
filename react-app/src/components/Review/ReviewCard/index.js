import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditReviewModal from "../EditReview/EditReview";
import { deleteReviewById, getReviews } from "../../../store/review";
import { allReviewsArray } from "../../../store/review";
import "./ReviewCard.css";
// import DisplayStars from "../DisplayStars";
// import defaultImage from "../../../imgs/notyelpDefault.png";
// import FooterAbout from "../../FooterLinks/Footer";

function ReviewCard({review, product}) {
  const allReviews = useSelector(state => state.reviews)
  const { reviewId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch])

  const handleDeleteReview = async (e, id) => {
    e.preventDefault();
    await dispatch(deleteReviewById(id, review.productId));
  };
    return (
      <div className="review-card">
        {/* <div>{product.avg_rating}</div> */}
        <div className="review-user-container flex">
          {/* <div className="review-user-image">
            <img
              className="review-user-image"
              src={review?.user.profile_image}
              onError={(e) => e.target.src = defaultImage} />
          </div> */}
          <div className="review-user-info">
            <div className="username-date">
            <div className="review-username">{review?.user?.username}</div>
            <div className="review-user-date">
            {new Date(review?.created_at).toLocaleDateString()}
          </div>
            </div>
          </div>
        </div>
        <div className="review-card-content">
          <div className="review-card-user-date">
            <div className="review-stars">
            <div className="stars-rating">
              {review?.stars}
              </div>
            <div className="fa-solid fa-star"/></div>
          </div>
          <div className="review-text">{review?.description}</div>
          {review?.userId == sessionUser?.id ? (
            <>
              <EditReviewModal rev={review} />
              <button
                className="delete-rev"
                onClick={(e) => handleDeleteReview(e, review?.id)}
              >
                Delete Review
              </button>
            </>
          ) : null}
        </div>
      </div>
    );
  }

export default ReviewCard;
