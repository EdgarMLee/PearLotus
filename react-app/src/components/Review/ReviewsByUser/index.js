import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import UserReview from "../UserReview";
import { allReviewsArray, AllUserReviews } from "../../../store/review";

const ReviewsByUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allReviews = useSelector(allReviewsArray);

  useEffect(() => {
    dispatch(AllUserReviews)
  }, [dispatch])
  return (
    <>
    <div className='ReviewsTitle'>My Reviews</div>
    <div className='emptyBorder'/>
    <div className='MyReviews'>
    {allReviews.map((review) => (
      <UserReview key={review?.id} review={review}/>
      ))}
      </div>
      </>
  )
}

export default ReviewsByUser;
