import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Product } from "./Product";
import "./ProductList.css";
export const ProductList = () => {
  const [products, setProducts] = useState([]);

  const deleteProd = useCallback((id) => {
    axios
      .delete(`http://localhost:3001/products/${id}`)
      .then((res) => {
        fetchData();
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  async function fetchData() {
    const resposne = await axios.get("http://localhost:3001/products");
    setProducts(resposne.data);
    console.log(products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-list">
      {products?.map((product) => (
        <Product key={product.id} product={product} deleteProd={deleteProd} />
      ))}
    </div>
  );
};
