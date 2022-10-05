import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import UserReview from "../UserReview";
import { AllUserReviews, getReviews } from "../../../store/review";
import ReviewCard from "../ReviewCard";
import * as reviewActions from "../../../store/review";
import "./ReviewsByUser.css";

const ReviewsByUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const reviews = useSelector(state => Object.values(state.reviews))
  const userReviews = reviews.filter(
    review => review.userId === sessionUser.id
  );

  console.log("allReviews!!!!!!!", reviews)
  useEffect(() => {
    dispatch(reviewActions.getReviews())
  }, [dispatch])


if (userReviews.length) {
  return (
    <>
    <div className="myreviewsBox">
    <div className='ReviewsTitle'>My Reviews</div>
    <div className='emptyBorder'/>
    <div className='MyReviews'>
    {userReviews.map((review, i) => (
      <div className="myreviews-card">
        <ReviewCard review={review}/>
      </div>
      ))}
      </div>
      </div>
      </>
  )
} else {
  <>
  <div>
  <div className='ReviewsTitle'>My Reviews</div>
  <div>No reviews at this time!</div>
  </div>
  </>
}
}

export default ReviewsByUser;
