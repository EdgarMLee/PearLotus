const GET_ALL_CAT = "categories/GET_ALL_cat";

const getAllCat = (categories) => ({
  type: GET_ALL_CAT,
  categories
});

export const getCategory = () => async (dispatch) => {
  const res = await fetch("/api/categories");
  if (res.ok) {
    const categories = await res.json();
    // console.log(categories, "!!!!!!!!!!!!!!!!!")
    dispatch(getAllCat(categories));
  }
  return res;
};

export default function categoryReducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case GET_ALL_CAT:
      newState = {};
      // console.log(action.categories, "PAYLOAD!!!!!")
      action.categories.forEach((category) => {
        newState[category.id] = category;
      });
      return newState;
    default:
      return state;
  }
}
