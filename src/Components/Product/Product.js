import React from "react";
import { confirmAlert } from "react-confirm-alert";
import { useNavigate } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import "./Product.css";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export const Product = ({ product, deleteProd }) => {
  const navigate = useNavigate();

  const validateLogin = () => {
    if (localStorage.getItem("user") != "") {
      navigate(`updateproduct/${product.id}`);
    } else {
      confirmAlert({
        title: "You need to login to edit",
        buttons: [
          {
            label: "OK",
            onClick: () => {
              return;
            },
          },
        ],
      });
    }
  };

  const confirmDelete = (id) => {
    if (localStorage.getItem("user") != "") {
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
    } else {
      confirmAlert({
        title: "You need to login to delete",
        buttons: [
          {
            label: "OK",
            onClick: () => {
              return;
            },
          },
        ],
      });
    }
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
          <button onClick={() => validateLogin()} className="btn btn-success">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
