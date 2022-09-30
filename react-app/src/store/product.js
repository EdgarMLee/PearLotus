const GET_ALL = "products/GET_ALL";
const CREATE = "products/CREATE";
const UPDATE = "products/UPDATE";
const DELETE = "products/DELETE";
const ADD_ITEM_TO_PRODUCT = "products/ADD_ITEM_TO_PRODUCT";

const getAll = (products) => ({
  type: GET_ALL,
  payload: products,
});

const create = (product) => ({
  type: CREATE,
  payload: product,
});

const update = (product) => ({
  type: UPDATE,
  payload: product,
});

const deleteProduct = (productId) => ({
  type: DELETE,
  payload: productId,
});

// export const addItemToProductAction = (productId, itemId) => ({
//   type: ADD_ITEM_TO_PRODUCT,
//   payload: { productId, itemId },
// });

export const getProduct = () => async (dispatch) => {
  const res = await fetch("/api/products");
  if (res.ok) {
    const products = await res.json();
    dispatch(getAll(products));
  }
  return res;
};

export const createProduct = (product) => async (dispatch) => {
  const res = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
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

export const getProductByid = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}`);
  if (res.ok) {
    const product = await res.json();
    dispatch(update(product));
  }
  return res;
};

export const findProduct = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}`);
  if (res.ok) {
    const product = await res.json();
    dispatch(update(product));
  }
};

export const editProduct = (data, productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(update(data));
    return data;
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

export const deleteProductById = (id) => async (dispatch) => {
  const res = await fetch(`/api/products/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(deleteProduct(id));
    return data;
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

export default function productReducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case GET_ALL:
      newState = {};
      action.payload.products.forEach((product) => {
        newState[product.id] = product;
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
