import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct } from "../../../store/product";
import ProductCard from "../ProductCard"

function ProductPage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const products = useSelector((state) => Object.values(state.products));

  useEffect(() => {
    dispatch(getProduct()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <div className="page-container">
        <div className="splash-container">
          {products.map((product) => (
            <ProductCard key={product?.id} product={product}/>
          ))}
        </div>
      </div>
    )
  )
}
export default ProductPage
