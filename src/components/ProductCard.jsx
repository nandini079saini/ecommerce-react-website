import { Link } from "react-router-dom";

export default function Productcard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} className="product-image" />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
        <div className="product-card-actions">
          <Link className="btn btn-secondary">View details</Link>
          <button className="btn btn-secondary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
