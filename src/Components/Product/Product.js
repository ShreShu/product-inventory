import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

export const Product = ({ product, deleteProd }) => {
  const navigate = useNavigate();

  return (
    <div className="product">
      <div className="card">
        <img src={product?.image[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.product_name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={() => deleteProd(product.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => navigate("updateproduct", product.id)}
            className="btn btn-success"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
