import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from 'react-router-dom';
import * as sessionActions from '../../../store/session';
import { deleteReviewById } from "../../../store/review";
import "./UserReview.css";

function ReviewUser({review}) {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  // const date = new Date().toLocaleDateString();

  let currentUser;
  if (sessionUser && review) {
    if (sessionUser.id === review.userId) {
      currentUser = true;
    } else currentUser = false;
  }

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deleteReviewById(review.id, review.productId))
  }

  return (
    <div className='reviewSquare'>
    <div className='reviewBox'>
      <div className="reviewsContainer">
      <div className='reviewProfile'>
      <div className='reviewUserIcon'>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '35px', width: '35px', fill: 'gray'}}><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path></svg>
      </div>
      <div className='reviewName'>{review?.user?.username}</div>
      </div>
      <div className='reviewDate'>{new Date(review?.created_at).toLocaleDateString()}</div>
      <div className='dateReview'>
      <div className='reviewReview'>
      <div className="fa-solid fa-star"/>{review?.stars} : {review?.description}</div>
      </div>
      <div className='reviewDivDelete'>
        {currentUser && (
          <div className='reviewDelete'>
            <button onClick={handleDelete} className='reviewDeleteButton'>Delete Review</button>
          </div>
        )}
      </div>
        </div>
    </div>
  </div>
  )
}

export default ReviewUser;
