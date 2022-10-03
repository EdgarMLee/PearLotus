import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProductCard.css";


function ProductCard({ product }) {
  // const { imageId } = useParams
  // const sessionUser = useSelector(state => state.session.user);
  // const image = useSelector(state => state.images[imageId])
  const image = product?.image
  return (
    <div className="card-container">
      <div className="product-card" to={`/products/${product.id}`}>
        <div className='product-card-outer'>
          <Link
            className="product-card-image"
            to={`/products/${product.id}`}>
              <img className="image-pic" src={image?.url}/>
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
        <div className="divLine"/>
        <div className="bottomBox">
        <div className="titleText">𝗣𝗘𝗔𝗥 & 𝗟𝗢𝗧𝗨𝗦 𝗖𝗢𝗟𝗟𝗘𝗖𝗧𝗜𝗢𝗡</div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard;
