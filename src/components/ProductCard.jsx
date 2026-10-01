import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card h-100 shadow-sm">

      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
      />

      <div className="card-body">

        <h5 className="card-title">
          {product.name}
        </h5>

        <p className="card-text text-muted">
          {product.description}
        </p>

        <h5 className="text-primary">
          ₹{product.price}
        </h5>

        <div className="d-flex gap-2">

          <Link
            to={`/products/${product.id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>

          <button className="btn btn-warning">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;
