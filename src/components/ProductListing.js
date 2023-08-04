import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/shop/shopActions';

const ProductListing = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product
        return (
            <div className='card' key={id}>
                <Link style={{ textDecoration: 'none' }} to={`/products/${id}`}>
                    <div className='img'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='title'>{title}</div>
                    <div className='box'>
                        <div className='price'>£ {price}</div>
                        <button className='btn'>Buy Now</button>
                    </div>
                </Link>
            </div>
        )
    })


    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    console.log("All Products : ", products);
    return (
        <>
            <h1 className='pheading'> Demo Products  </h1>
            <section className='sec'>
                <div className='products'>
                    {renderList}
                </div>
            </section>
        </>
    )
}

export default ProductListing;