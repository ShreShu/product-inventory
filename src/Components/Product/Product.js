import React from "react";
import { confirmAlert } from "react-confirm-alert";
import { useNavigate } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import "./Product.css";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export const Product = ({ product, deleteProd }) => {
  const navigate = useNavigate();

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteProd(id),
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };

  return (
    <div className="product">
      <div className="card">
        <img src={product?.image[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.product_name}</h5>

          <TextTruncate
            line={3}
            element="p"
            truncateText="..."
            text={product.description}
          />

          <button
            onClick={() => confirmDelete(product.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => navigate(`updateproduct/${product.id}`)}
            className="btn btn-success"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
