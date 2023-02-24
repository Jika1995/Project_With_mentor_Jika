import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
  <div>
    
    <h1>AddProduct</h1>
    <input type="text" placeholder="Title" name="name" onChange={handleInp}/>
    <input type="text" placeholder="Description" name="description" onChange={handleInp}/>
    <input type="text" placeholder="Price" name="price" onChange={handleInp}/>
    <input type="text" placeholder="Picture" name="picture" onChange={handleInp}/>
    <input type="text" placeholder="Type" name="type" onChange={handleInp}/> <br/>

    <button onClick={() => {
      addProduct(product)
      navigate('/products')
    }}>
      Add this Product
    </button>
  </div>
  )
};

export default AddProduct;