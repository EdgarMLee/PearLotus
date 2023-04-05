import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import UserReview from "../UserReview";
import { AllUserReviews, getReviews } from "../../../store/review";
import ReviewCard from "../ReviewCard";
import * as reviewActions from "../../../store/review";
import "./ReviewsByUser.css";
import FooterBottom from "../../Footer";

const ReviewsByUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => Object.values(state.reviews));
  const products = useSelector((state) => Object.values(state.products));

  function redirectProduct(productId) {
    history.push(`/products/${productId}`)
  }

  const userReviews = reviews.filter(
    (review) => review.userId === sessionUser.id
  );

  useEffect(() => {
    dispatch(AllUserReviews());
  }, [dispatch]);

  return (
    <>
      {userReviews.length > 0 ? (
        <div className="myreviewsBox">
          <div className="ReviewsTitle">My Reviews</div>
          <div className="emptyBorder" />
          <div className="empty-height">
          <div className="MyReviews">
            {userReviews.map((review, i) => (
              <div className="myreviews-card"
              onClick={() => {redirectProduct(review?.productId)}}>
                {/* {review?.product?.name} */}
                <ReviewCard review={review} />
              </div>
            ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-reviewBox">
          <div className="ReviewsTitle">My Reviews</div>
          <div className="empty-reviews">No reviews at this time! Why not leave a review for your favorite products?</div>
          <img className='empty-rimage' src={"https://static.vecteezy.com/system/resources/previews/006/083/297/original/set-of-different-cosmetics-organic-cosmetics-and-makeup-items-in-bottles-tubes-and-jars-body-hair-and-skin-care-products-hand-drawn-cartoon-illustration-isolated-on-white-background-vector.jpg"}/>
        </div>
      )}
      <FooterBottom/>
    </>
  );
};

export default ReviewsByUser;
