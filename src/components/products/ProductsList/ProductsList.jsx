import React, { useEffect, useState } from 'react';
import { useProducts } from '../../../contexts/ProductContextProvider';
import ProductCard from '../ProductCard/ProductCard';
import { Pagination } from '@mui/material';

const ProductsList = () => {

  const { products, getProducts } = useProducts();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getProducts()
  }, []);

  const itemsOnPage = 6;

  const countPages = Math.ceil(products.length/itemsOnPage); //отсюда возьмет количество страниц всего

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentProductsData () {
    const begin = (page -1) * itemsOnPage;
    const end = begin + itemsOnPage; //от нуля до 6, 6 НЕВКЛЮЧИТЕЛЬНО
    return products.slice(begin, end)
  };

  return (
    <>
    <h3>Products List</h3>
    <div style={{display: 'flex', justifyContent: 'space-between', width: '90%', flexWrap: 'wrap', margin: 'auto'}}>
    {/* {products.map(item => (
      <ProductCard key={item.id} item={item}/>
    ))} */}
    {products ? (
      currentProductsData().map(item => (
        <ProductCard key={item.id} item={item}/>
      ))
    ) : (
      <h3>Loading...</h3>
    )}
    <Pagination count={countPages} page={page} onChange={handlePage}/>
    </div>
    </>
  )
}

export default ProductsList