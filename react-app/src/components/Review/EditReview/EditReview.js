import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as reviewActions from "../../../store/review";
import "./EditReview.css";

const EditReview = ({ review, closeModal }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [stars, setStars] = useState(review?.stars);
  const [description, setDescription] = useState(review?.description);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setErrors([]);
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

  useEffect(() => {
    const errors = [];
    if (stars < 1) errors.push("stars: *Stars must be at least 1!");
    if (stars > 5) errors.push("stars: *Stars must be at most 5!");
    if (description.length < 4) errors.push("description: *Description must be more than 3 characters!");
    if (description.length > 255)errors.push("description: *Description must not be more than 255 characters!");
    setErrors(errors);
  }, [stars, description]);

  console.log("errors", errors)
  return (
    <div className="editReviewBox">
      <form onSubmit={handleSubmit} className="review-form">
        <div className="input-container">
          <div className="editreview-title">Edit Review</div>
          {/* TODO: FIX ERROR HANDLERS TO BE VISIBLE HERE */}
          {
            Object.values(errors).map((error, idx) => (
              <div className="reviewErrors">
                <div key={idx} className="reviewError">
                  {error.split(": ")[1]}
                </div>
              </div>
            ))}
          <div className="inputItem">
            <textarea
              className="review-descript"
              placeholder="Description 1-255 characters"
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
          <div className="reviewStars">
            <input
              type="number"
              placeholder="Rate from 1-5 Stars"
              min="1"
              max="5"
              className="userStar"
              value={stars}
              onChange={(e) => setStars(e.target.value)}
              required
            />
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
