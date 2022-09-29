import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProduct } from "../../../store/product";

function CreateProductForm({ closeModal }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const history = useHistory();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setErrors([]);
    const productInfo = {
      owner_id: user.id,
      name,
      category,
      price,
      description,
    };
    const newProduct = await dispatch(createProduct(productInfo));
    if (newProduct && newProduct.errors) {
      setErrors(newProduct.errors);
    } else if (newProduct && !newProduct.errors) {
      closeModal();
      history.push(`/products/${newProduct.id}`);
    }
  };
  useEffect(() => {
    const errors = [];
    if (name.length > 50) {
      errors.push("name: Name must be less than 50 characters");
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="createProductBox">
        <div className="createProductTitle">Create Your Product!</div>
        {isSubmitted &&
          errors.map((error, ind) => (
            <div className="createErrors">
              <div key={ind} className="createError">
                {error.split(": ")[1]}
              </div>
            </div>
          ))}
          <div className="input-container">
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
                Create Product
              </button>
            </div>
          </div>
    </form>
  );
}

export default CreateProductForm;
