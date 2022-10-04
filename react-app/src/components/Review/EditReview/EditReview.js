import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./EditReview.css";
import * as reviewActions from "../../../store/review";

const EditReview = ({ review, closeModal }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [stars, setStars] = useState(review?.stars);
  const [description, setDescription] = useState(review?.description);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      userId: sessionUser.id,
      productId: review.productId,
      stars,
      description,
    };

    const data = await dispatch(reviewActions.editReview(info, review.id));
    if (data && data.errors) {
      setErrors(data.errors);
    } else {
      setDescription("");
      setStars("");
      closeModal();
    }
  };

  return (
    <div className="editReviewBox">
    <form onSubmit={handleSubmit} className="review-form">
      <div className="input-container">
        <div className="editreview-title">Edit Review</div>
        <div className="reviewStars">
          <input
            type="number"
            placeholder="Rate from 1-5 Stars"
            min="0"
            max="5"
            className="userStar"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            required
          />
        </div>
        <div className="inputItem">
          <textarea
            className="review-descript"
            placeholder="Description"
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
          {/* <label className="review-body">Review Description</label> */}
        </div>
        <button
          className="submitButton-review"
          type="submit"
          disabled={description?.length <= 3}
        >
          Submit Review
        </button>
      </div>
    </form>
    </div>
  );
};

export default EditReview;
