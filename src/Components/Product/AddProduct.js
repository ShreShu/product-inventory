import { Input, InputLabel, Button, TextareaAutosize } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";

export const AddProduct = () => {
  const [values, setValues] = useState({
    product_name: "",
    retail_price: "",
    discounted_price: "",
    description: "",
    brand: "",
    image: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (localStorage.getItem("user") != "") {
      axios
        .post("http://localhost:3001/products", values)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      confirmAlert({
        title: "You need to login to Add",
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
    <div>
      <div className="registration-form">
        <form onSubmit={submitHandler}>
          <InputLabel htmlFor="standard-adornment-weight">Name</InputLabel>
          <Input
            id="product_name"
            value={values.product_name}
            onChange={handleChange("product_name")}
            aria-describedby="standard-weight-helper-text"
          />

          <InputLabel htmlFor="standard-adornment-weight">
            Retail Price
          </InputLabel>
          <Input
            id="retail_price"
            value={values.retail_price}
            onChange={handleChange("retail_price")}
            aria-describedby="standard-weight-helper-text"
          />

          <InputLabel htmlFor="standard-adornment-weight">
            Discount Price
          </InputLabel>
          <Input
            id="discounted_price"
            value={values.discounted_price}
            onChange={handleChange("discounted_price")}
            aria-describedby="standard-weight-helper-text"
          />

          <InputLabel htmlFor="standard-adornment-weight">
            Description
          </InputLabel>
          <TextareaAutosize
            variant="standard"
            id="description"
            value={values.description}
            onChange={handleChange("description")}
            aria-describedby="standard-weight-helper-text"
          />
          <InputLabel htmlFor="standard-adornment-weight">Brand</InputLabel>
          <Input
            id="brand"
            value={values.brand}
            onChange={handleChange("brand")}
            aria-describedby="standard-weight-helper-text"
          />
          <br />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
