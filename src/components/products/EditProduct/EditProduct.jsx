import React from 'react';
import { useState, useEffect } from 'react';
import { useProducts } from '../../../contexts/ProductContextProvider';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {

  const {getProductDetails, productDetails, saveEditedProduct} = useProducts();
  const [product, setProduct] = useState(productDetails);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id)
  }, []); //получить инфо о конкретном продукте и обновит productDetails

  useEffect(() => {
    setProduct(productDetails)
  }, [productDetails, ]) //он увидит, что произошли изменения в productDetails и обновит наш product

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
  <>
  {product ? (
      <div>
      <h1>Edit Product</h1>
      <input type="text" placeholder="Title" name="name" onChange={handleInp} value={product.name}/>
      <input type="text" placeholder="Description" name="description" onChange={handleInp} value={product.description}/>
      <input type="text" placeholder="Price" name="price" onChange={handleInp} value={product.price}/>
      <input type="text" placeholder="Picture" name="picture" onChange={handleInp} value={product.picture}/>
      <input type="text" placeholder="Type" name="type" onChange={handleInp} value={product.type}/> <br/>
  
      <button onClick={() => {
        saveEditedProduct(product)
        navigate('/products')
      }}>
        Save changes
      </button>
      </div>
  ) : (
    <h1>Loading...</h1>
  )}
  </>
  )
}

export default EditProduct