import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchSingleProduct, removeSelectedProduct} from '../redux/shop/shopActions';
import { useDispatch, useSelector } from 'react-redux';


const  ProductDetail =() => {
  const product =  useSelector(state => state.selectedProduct);
  const dispatch = useDispatch();
  const {productId}  = useParams();
 
  console.log( "Single Selected Product :", product);
  useEffect(()=>{
    if(productId && productId !== "")
    {
      dispatch(fetchSingleProduct(productId));
    }

    //CleanUp function
    return()=>{
      dispatch(removeSelectedProduct());
    }
     
  },[productId])


  return (
    <section className='sec'> 
    {Object.keys(product).length === 0 ?(
      <div>...Loading </div>
    ) : (
      <div className=''>  
        <div className='product-card'>
            <div className='product-image'>
              <img src= {product.image} alt={product.title}/>
            </div>
           
            <div className='product-details'>
              <h2> {product.title}</h2>     
              <div className='category'>Product type: {product.category}</div>         
              <div className='desc'>{product.description} </div>  
              <div className='price'>£ {product.price}</div>              
              <button className='btn'>Buy Now</button>
            </div>         
        </div>  
      </div>
    )}
       
  </section>
  )
}

export default ProductDetail;