import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditProductModal from ".";
import { editProduct, getProductByid } from "../../../store/product";
import { getCategory } from "../../../store/category";

function ProductEditForm({ closeModal }) {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const product = useSelector((state) => state.products[productId]);
  const categories = useSelector((state) => Object.values(state.categories));
  const [name, setName] = useState(product?.name);
  const [category, setCategory] = useState(product?.category);
  const [price, setPrice] = useState(product?.price);
  const [shortdescript, setShortdescript] = useState(product?.shortdescript);
  const [description, setDescription] = useState(product?.description);
  const [errors, setErrors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (product && !isLoaded) {
    setIsLoaded(true);
  } else if (!product && !isLoaded) {
    dispatch(getProductByid(productId).then(() => setIsLoaded(true)));
  }

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
    if (shortdescript.length > 500) {
      errors.push("shortdescript: Short Description is too long!");
    }
    if (description.length > 1000) {
      errors.push("description: Description is too long!");
    }
    setErrors(errors);
  }, [name, price, shortdescript, description]);

  useEffect(() => {
    dispatch(getCategory());
  }, []);

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
      <div className="editProductBox">
        <>
          <form onSubmit={handleSubmit} className="editForm">
            <div className="editProductBox">
              <div className="editProductTitle">Update Your Product</div>
              {isSubmitted &&
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
                {/* CATEGORY GOES IN HERE */}
                <div className="select-outer">
                  <select
                    htmlFor="category"
                    name="category"
                    className="edit-product"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    {categories?.map((category) => {
                      console.log("!!!!!!!!", categories);
                      return (
                        <option
                          value={category.name}
                          className="edit-category-name"
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
                <button name="submit" type="submit" className="updateButton">
                  Update Product
                </button>
              </div>
            </div>
          </form>
        </>
      </div>
    )
  );
}
export default ProductEditForm;
