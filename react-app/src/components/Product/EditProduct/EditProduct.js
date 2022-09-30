import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditProductModal from ".";
import { editProduct, getProductByid } from "../../../store/product";

function ProductEditForm({ closeModal }) {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const product = useSelector(state => state.products[productId])

  const [name, setName] = useState(product?.name)
  const [category, setCategory] = useState(product?.category)
  const [price, setPrice] = useState(product?.price)
  const [description, setDescription] = useState(product?.description)
  const [errors, setErrors] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false);

  if (product && !isLoaded) {
    setIsLoaded(true);
  } else if (!product && !isLoaded) {
    dispatch(getProductByid(productId).then(() => setIsLoaded(true)))
  }

  useEffect(() => {
    const errors = [];
    if (name.length > 50) {
      errors.push("name: Name must be less than 50 characters")
    }
    if (name.length < 5) {
      errors.push("name: Name must be at least 5 characters");
    }
    if (price > 500) {
      errors.push("price: Price is too high!");
    }
    if (price <= 0) {
      errors.push("price: Price is too low!");
    }
    if (description.length > 255) {
      errors.push("description: Description is too long!");
    }
    setErrors(errors);
  }, [name, price, description]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true)
    setErrors([]);

    const productInfo = {
      owner_id: user.id,
      name,
      category,
      price,
      description
    };
    const data = await dispatch(editProduct(productInfo, product.id));
    if (data && data.errors) {
      setErrors(data.errors);
    } else if (data && !data.errors && !errors.length) {
      closeModal();
      dispatch(getProductByid(productId));
    }
  };

  return (
    isLoaded && (
      <form onSubmit={handleSubmit} className="editForm">
        <div className="editProductBox">
          <div className="editProductTitle">Update Your Product</div>
          { isSubmitted &&
          errors.map((error, ind) => (
            <div className="editErrors">
              <div key={ind} className="editError">
                {error.split(": ")[1]}
              </div>
            </div>
          ))}
          <div className="edit-container">
            <div className="inputInfo">
            <input
              type="text"
              value={name}
              className="nameInput"
              placeholder=" "
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Name</label>
            </div>
            <div className="inputInfo">
            <input
              type="integer"
              value={price}
              className="priceInput"
              placeholder=" "
              onChange={(e) => setPrice(e.target.value)}
              required
              />
            <label htmlFor="price">Price</label>
              </div>
              <div className="inputInfo desc-input">
            <textarea
              type="text"
              value={description}
              className="descriptionInput"
              placeholder=" "
              onChange={(e) => setDescription(e.target.value)}
              required
              />
            <label htmlFor="description">Description</label>
              </div>
              <button name='submit' type='submit' className='submitButton'>
                Update Product
              </button>
          </div>
        </div>
      </form>
    )
  )
}
export default ProductEditForm;
