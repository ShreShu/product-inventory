import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Nav } from "./Components/Nav";
import { Product } from "./Components/Product";
import { AddProduct } from "./Components/Product/AddProduct";
import { DeleteProduct } from "./Components/Product/DeleteProduct";
import { ProductList } from "./Components/Product/ProductList";
import { UpdateProduct } from "./Components/Product/UpdateProduct";
import Register from "./Components/Register";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />}>
          <Route path="" element={<ProductList />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="updateproduct/:id" element={<UpdateProduct />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
