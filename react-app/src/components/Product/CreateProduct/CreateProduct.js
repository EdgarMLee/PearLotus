import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProduct } from "../../../store/product";
import { getCategory } from "../../../store/category";

function CreateProductForm({ closeModal }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const categories = useSelector((state) => Object.values(state.categories));
  const history = useHistory();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [shortdescript, setShortdescript] = useState("");
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
      shortdescript,
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
    dispatch(getCategory());
  }, []);

  useEffect(() => {
    const errors = [];
    if (name.length > 50) errors.push("name: *Name must be less than 50 characters");
    if (name.length < 5) errors.push("name: *Name must be at least 5 characters");
    if (price > 500) errors.push("price: *Price is too high!");
    if (price <= 0) errors.push("price: *Price is too low!");
    // if (typeof price !== Number) errors.push("price: *Price must be a number")
    if (shortdescript.length > 200) errors.push("shortdescript: *Short Description is too long!");
    if (shortdescript.length < 5) errors.push("shortdescript: *Short Description must be at least 5 characters!");
    if (description.length > 850) errors.push("description: *Description is too long!");
    if (description.length < 5) errors.push("description: *Description must be at least 5 characters!");
    setErrors(errors);
  }, [name, price, shortdescript, description]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="createProductBox">
        <div className="createProductTitle">Create Your Product</div>
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
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            {/* <label htmlFor="name">Name</label> */}
          </div>
          <div className="inputInfo">
            <input
              type="integer"
              value={price}
              className="priceInput"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            {/* <label htmlFor="price">Price</label> */}
          </div>

          <div className="select-outer">
            <select
              htmlFor="category"
              name="category"
              className="product-form-select"
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option disabled selected value={category}>
                Category
              </option>
              {categories?.map((category) => {
                return (
                  <option
                    value={category.name}
                    className="product-form-options"
                  >
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="inputInfo">
            <input
              type="text"
              value={shortdescript}
              className="shortdescriptInput"
              placeholder="Short Description"
              onChange={(e) => setShortdescript(e.target.value)}
              required
            />
            {/* <label htmlFor="shortdescript">Short Description</label> */}
          </div>
          <div className="inputInfo desc-input">
            <textarea
              type="text"
              value={description}
              className="descriptionInput"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            {/* <label htmlFor="description">Description</label> */}
          </div>
          <button name="submit" type="submit" className="createProductButton">
            Create Product
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateProductForm;
