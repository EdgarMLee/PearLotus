import { getProductByid } from "./product";

const GET_ALL = "reviews/GET_ALL";
const GET_CURRENT = "reviews/GET_CURRENT";
const CREATE = "reviews/CREATE";
const UPDATE = "reviews/UPDATE";
const DELETE = "reviews/DELETE";

export const allReviewsArray = (state) => Object.values(state.reviews);

const getAll = (reviews) => ({
  type: GET_ALL,
  payload: reviews,
});

const getUsersReview = (reviews) => ({
  type: GET_CURRENT,
  payload: reviews,
});

const create = (review) => ({
  type: CREATE,
  payload: review,
});

const update = (review) => ({
  type: UPDATE,
  payload: review,
});

const deleteReview = (reviewId) => ({
  type: DELETE,
  payload: reviewId,
});

// GET ALL REVIEWS
export const getReviews = () => async (dispatch) => {
  const res = await fetch("/api/review/");
  if (res.ok) {
    const reviews = await res.json();
    dispatch(getAll(reviews));
  }
  return res;
};

// TODO: GET REVIEW BY ID THUNK
export const getReviewByid = (reviewId) => async (dispatch) => {
  const res = await fetch(`/api/review/${reviewId}`);
  if (res.ok) {
    const review = await res.json();
    dispatch(getAll(review))
    dispatch(getProductByid(review.description))
  }
  return res;
}

//GET REVIEWS BY CURRENT USER
export const AllUserReviews = () => async (dispatch) => {
  const res = await fetch(`/api/review/current/`);
  if (res.ok) {
    const reviews = await res.json();
    dispatch(getUsersReview(reviews));
  }
  return res;
};

//CREATE REVIEW
export const createReview = (review) => async (dispatch) => {
  const res = await fetch("/api/review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  if (res.ok) {
    const review = await res.json();
    dispatch(create(review));
    dispatch(getProductByid(review.productId));
    return review;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
  return res;
};

//EDIT REVIEW
export const editReview = (review, id) => async (dispatch) => {
  const res = await fetch(`/api/review/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  if (res.ok) {
    const review = await res.json();
    dispatch(update(review));
    return review;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
  return res;
};

//DELETE REVIEW
export const deleteReviewById = (id, productId) => async (dispatch) => {
  const res = await fetch(`/api/review/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteReview(id));
    dispatch(getProductByid(productId));
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
  return res;
};

//REDUCER
export default function reviewReducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case GET_ALL:
      action.payload.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    case GET_CURRENT:
      action.payload.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    case CREATE:
      newState[action.payload.id] = action.payload;
      return newState;
    case UPDATE:
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
