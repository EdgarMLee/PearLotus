import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getProductByid, deleteProductById } from "../../../store/product";
import EditProductModal from "../EditProduct";
import CreateReviewModal from "../../Review/CreateReview";
import ReviewCard from "../../Review/ReviewCard";
import { allReviewsArray, getReviews } from "../../../store/review";
import "./ProductDetail.css";

function ProductDetail() {
  let currentUser;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const reviewsObj = useSelector(allReviewsArray)
  const sessionUser = useSelector((state) => state.session.user);
  const product = useSelector((state) => state.products[productId]);
  // const image = useSelector((state) => state.images[productId]);
  const reviews = useSelector((state) => state.reviews);
  const [isLoaded, setIsLoaded] = useState(false);
  // const image = product?.image
  // const [image, setImage] = useState()
  useEffect(() => {
    dispatch(getProductByid(productId)).then(() => setIsLoaded(true));
    dispatch(getReviews())
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

if (!product) return null;

return (
    isLoaded && product && (
      <div className="productdetail-container">
        <div className="img-and-description">
          <div className="prod-detailpic">
            <img className="prod-detailpic" src={product?.image ? product.image.url : "https://static.vecteezy.com/system/resources/previews/005/331/807/original/skincare-products-nine-icons-vector.jpg"} />
          </div>
          <div className="description-buttons">
          <div className="divider">
            <div className="product-name">{product?.name}</div>
            <div className="company-category">
            <div className="product-company">PEAR & LOTUS COLLECTION</div>
            <div className="type">Type:</div>
            <div className="product-category">{product?.category}!</div>
            </div>
            <div className="products-price">${product?.price}</div>
            <div className="divLineDetail"/>
            <div className="product-short">{product?.shortdescript}</div>
            <div className="product-description">{product?.description}</div>
          </div>
        {currentUser && (
          <div className="EditDeleteBusiness flex">
            <EditProductModal key={productId} />
            <button onClick={handleDelete} className="deleteButton">
              Delete Product
            </button>
          </div>
        )}
        </div>
        </div>
        <div className="review-prod-Box">
        {/* <div className="reviews-header header">Reviews</div> */}
        <div className="createReview">
          {sessionUser && <CreateReviewModal productId={productId} />}
        </div>
        <div className="reviews-inner-container">
          {product?.review_ids.length ? (
            product?.review_ids.map((reviewId) => (
              <ReviewCard key={reviewId} review={reviews[reviewId]} />
              // console.log(reviewId)
              ))
              ) : (
                <div style={{ paddingBottom: "25px" }}>No reviews. Yet...</div>
                )}
          {/* {product?.review_ids.map((reviewId) => (
            <ReviewCard key={reviewId} review={reviews[reviewId]} />
          ))} */}
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetail;
