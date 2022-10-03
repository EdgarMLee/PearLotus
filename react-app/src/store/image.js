const GET_ALL = "images/GET_ALL";
const CREATE = "images/CREATE";

const create = (image) => ({
  type: CREATE,
  payload: image,
});

const getAll = (images) => ({
  type: GET_ALL,
  payload: images,
});

//CREATE AN IMAGE
export const createImage = (image) => async (dispatch) => {
  const res = await fetch("/api/images", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(image),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(create(data));
    return data;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

//GET AN IMAGE
export const getImage = () => async (dispatch) => {
  const res = await fetch("/api/images");
  if (res.ok) {
    const images = await res.json();
    dispatch(getAll(images));
  }
  return res;
};

export default function imageReducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case GET_ALL:
      newState = {};
      action.payload.images.forEach((image) => {
        newState[image.id] = image;
      });
      return newState;
    case CREATE:
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
}
