import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { Rating } from "react-simple-star-rating";
import "./EditReview.css";
import * as reviewActions from "../../../store/review";

const EditReview = ({ rev, closeModal }) => {
  const productId = rev?.productId;
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [stars, setStars] = useState(rev?.stars * 20);
  const [description, setDescription] = useState(rev.review);
  const [errors, setErrors] = useState([]);
  // const handleRating = (rate) => {
  //   setStars(rate);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      user_id: sessionUser.id,
      stars: stars / 20,
      description,
      productId: rev.productId,
    };

    const data = await dispatch(reviewActions.editReview(info, rev.id));
    if (data && data.errors) {
      setErrors(data.errors);
    } else {
      setDescription("");
      setStars("");
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div className="input-container">
        <div className="editreview-title">Edit A Review</div>
        {/* <Rating
          onClick={handleRating}
          ratingValue={stars}
          size={30}
          transition
          fillColor="gold"
          allowHover={false}
          emptyColor="gray"
        /> */}
        <div className='reviewStars'>
        <input
          type="number"
          placeholder='Rate from 1-5 Stars'
          min="0"
          max="5"
          className='userStar'
          value={stars}
          onChange={(e) => setStars(e.target.value)}
          required
          />
      </div>
        <div className="inputItem">
          <input
            className="make-bigger"
            placeholder=" "
            value={description}
            onChange={(e) => {
              const textValue = e.target.value;
              if (textValue.length > 255) {
                return;
              }
              setDescription(e.target.value);
            }}
            required
          />
          <label className="review-body">Review Description</label>
        </div>
        <button
          className="submitButton-review"
          type="submit"
          disabled={description.length <= 3}
        >
          Submit Review
        </button>
      </div>
    </form>
  );
};

export default EditReview;
