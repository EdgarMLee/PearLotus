import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getProductByid, deleteProductById } from "../../../store/product";
import EditProductModal from "../EditProduct";
import CreateReviewModal from "../../Review/CreateReview";
import ReviewCard from "../../Review/ReviewCard"

function ProductDetail() {
  let currentUser;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const product = useSelector((state) => state.products[productId]);
  // const image = useSelector((state) => state.images[productId]);
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
        Product Details Page
        <div className="prod-detailpic">
          <img className="prod-detailpic" src={product?.image["url"]} />
        </div>
        <div className="divider">
          <div className="product-name">{product?.name}</div>
          <div className="product-short">{product?.shortdescript}</div>
          <div className="product-description">{product?.description}</div>
        </div>
        {currentUser && (
          <div className="EditDeleteBusiness flex">
            <EditProductModal key={productId}/>
            <button
              onClick={handleDelete}
              className="deleteButton"
            >
              Delete Product
            </button>
          </div>
        )}
        <div>
        </div>
        <div className="reviews-header header">Reviews</div>
        <div className="createReview">
        {sessionUser && <CreateReviewModal productId={productId} />}
        </div>
        <div className="reviews-inner-container">
                  {product?.review_ids.length ? (
                    product?.review_ids.map((reviewId) => (
                      <ReviewCard key={reviewId} review={reviews[reviewId]} />
                    ))
                  ) : (
                    <div style={{ paddingBottom: "25px" }}>
                      No reviews. Yet...
                    </div>
                  )}
                   {product?.review_ids.map((reviewId) => (
                      <ReviewCard key={reviewId} review={reviews[reviewId]} />
                    ))}
                </div>
      </div>
    )
  );
}

export default ProductDetail;
