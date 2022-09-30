import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getProductByid, deleteProductById } from "../../../store/product";
import EditProductModal from "../EditProduct";

function ProductDetail() {
  let currentUser;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const product = useSelector((state) => state.products[productId]);
  const image = useSelector((state) => state.images[productId]);
  const reviews = useSelector((state) => state.reviews);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getProductByid(productId)).then(() => setIsLoaded(true));
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    setIsLoaded(false);
    await dispatch(deleteProductById(productId));
    await history.push("/");
  };

  const reviewed = () => {
    let reviewedUser = false;
    for (let i of product?.review_ids) {
      if (reviews[i]?.userId === sessionUser.id) {
        reviewedUser = true;
      }
    }
    return reviewedUser;
  };

  if (sessionUser && product) {
    if (sessionUser.id === product.owner_id) {
      currentUser = true;
    } else currentUser = false;
  }

  return (
    isLoaded && (
      <div className="productdetail-container">
        <div>{image.productId}</div>
      </div>
    )
  );
}

export default ProductDetail;
