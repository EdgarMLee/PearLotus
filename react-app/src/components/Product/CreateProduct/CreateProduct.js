import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createProduct } from "../../../store/product";

function CreateProductForm({ closeModal }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
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
      description
    };
    const newProduct = await dispatch(createProduct(productInfo));
    if (newProduct && newProduct.errors) {
      setErrors(newProduct.errors);
    } else if (newProduct && !newProduct.errors) {
      closeModal();
      history.push(`/products/${newProduct.id}`)
    }
  }
  useEffect(() => {
    const errors = [];
    if (name.length > 50) {
      errors.push("name: Name must be less than 50 characters");
    }
    if (name.length < 5) {
      errors.push("name: Name must be at least 5 characters");
    }
    if (category !== "") {
      
    }
  })
}

export default CreateProductForm
