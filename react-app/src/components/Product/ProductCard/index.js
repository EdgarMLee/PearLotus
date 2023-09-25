import { Link, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  // const { imageId } = useParams
  // const sessionUser = useSelector(state => state.session.user);
  // const image = useSelector(state => state.images[imageId])
  const [imageError, setImageError] = useState(false);
  const history = useHistory();
  function redirectProduct(productId) {
    history.push(`/products/${productId}`);
  }
  const handleImageError = () => {
    setImageError(true);
  };

  console.log("product?.image", product?.image?.url);
  return (
    <div className="card-container">
      <div className="product-card" to={`/products/${product.id}`}>
        <div className="product-card-outer">
          <Link className="product-card-image" to={`/products/${product.id}`}>
            <img
              className="image-pic"
              src={
                imageError
                  ? "https://static.vecteezy.com/system/resources/previews/005/481/723/original/set-of-natural-organic-cosmetic-products-in-bottle-jar-tube-for-skincare-basic-female-beauty-skin-care-cartoon-illustration-isolated-on-white-background-vector.jpg"
                  : product?.image?.url
              }
              onError={handleImageError} // Handle image loading errors
              alt={product.name} // Add alt text for accessibility
            />
          </Link>
        </div>
        <div className="product-card-info">
          <Link className="product-card-name" to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </div>
        <div className="product-shortdescript">{product.shortdescript}</div>
        <div className="product-price">${product.price}</div>
        <div className="divLine" />
        <div className="bottomBox">
          <div className="title-avgrating">
            <div className="titleText">𝗣𝗘𝗔𝗥 & 𝗟𝗢𝗧𝗨𝗦 𝗖𝗢𝗟𝗟𝗘𝗖𝗧𝗜𝗢𝗡</div>
            <div className="product-avg-rating">
              {product.avg_rating.toFixed(2)}
            </div>
            <div className="fa-solid fa-star" />
          </div>
          <div className="category-product">{product.category}</div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
