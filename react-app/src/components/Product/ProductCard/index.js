import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function ProductCard({ product, image }) {
  // const { imageId } = useParams
  // const sessionUser = useSelector(state => state.session.user);
  // const image = useSelector(state => state.images[imageId])
  return (
    <div className="card-container">
      <div className="product-card" to={`/products/${product.id}`}>
        <div className='product-card-outer'>
          <Link
            className="product-card-image"
            to={`/products/${product.id}`}>
              <img className="image-pic" src={product.image["url"]}/>
            </Link>
        </div>
        <div className="product-card-info">
        <Link
            className="product-card-name"
            to={`/products/${product.id}`}>
              {product.name}
            </Link>
        </div>
        <div className="product-shortdescript">
          {product.shortdescript}
        </div>
        <div className="product-price">
          ${product.price}
        </div>
      </div>
    </div>
  )
}
export default ProductCard;
