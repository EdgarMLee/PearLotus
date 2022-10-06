import React, { useEffect, useState } from "react";
import { createReview } from "../../../store/review";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./CreateReview.css";

function ReviewForm() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState("");
  const [errors, setErrors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sessionUser = useSelector(state => state.session.user)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setErrors([]);
    const reviewInfo = {
      productId,
      userId: sessionUser.id,
      description,
      stars,
    };
    dispatch(createReview(reviewInfo, productId)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
      else if (data && data.message) setErrors([data.message]);
    });
  };

  useEffect(() => {
    const errors = [];
    if (stars <= 0) errors.push("stars: *Stars must be at least 1!");
    if (stars > 5) errors.push("stars: *Stars must be at most 5!");
    if (description.length < 4) errors.push("description: *Description must be more than 3 characters!");
    if (description.length > 255) errors.push("description: *Description must not be more than 255 characters!");
    setErrors(errors);
  }, [stars, description])
  console.log("errors", errors)
  return (
    <div className="reviewBox">
      <form onSubmit={handleSubmit} className="reviewForm">
        <div className="createReviewTitle">
          <h2 className="reviewHTitle">Review</h2>
        </div>
        <div>
          {/* TODO: FIX ERROR HANDLERS TO BE VISIBLE HERE */}
          {
          errors.map((error, idx) => (
            <div className="reviewErrors">
            <div key={idx} className="reviewError">
              {error.split(": ")[1]}
            </div>
            </div>
          ))}
        </div>
        <div className="reviewDescription">
          <input
            type="text"
            placeholder="Description"
            className="userReview"
            value={description}
            onChange={(e) =>{
              setDescription(e.target.value);
            }}
            required
          />
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
        <div>
          <button
          type="submit"
          className="submitReview"
          disabled={errors.length > 0}>
            Create Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
