import { EventNote } from "@mui/icons-material";
import {
  Button,
  ButtonBase,
  Input,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UpdateProduct = () => {
  const param = useParams();
  const id = param.id;

  const [values, setValues] = useState({
    product_name: "",
    retail_price: "",
    discounted_price: "",
    description: "",
    brand: "",
    image: "",
  });

  const fetchProduct = useCallback((id) => {
    console.log(id);
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => {
        console.log(res);
        const data = {
          product_name: res.data.product_name,
          retail_price: res.data.retail_price,
          discounted_price: res.data.discounted_price,
          description: res.data.description,
          brand: res.data.brand,
          image: "",
        };

        setValues(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  useEffect(() => {
    fetchProduct(id);
  }, []);

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/products/${id}`, values)
      .then((res) => {
        setValues(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
