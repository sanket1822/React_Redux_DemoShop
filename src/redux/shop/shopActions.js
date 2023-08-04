import { SELECTED_PRODUCT, SET_PRODUCTS, REMOVE_SELECTED_PRODUCT } from "./shopTypes";
import axios from "axios";

export const setProducts = (products) => {
    return{
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) =>{
    return{
        type: SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () =>{
    return{
        type : REMOVE_SELECTED_PRODUCT
    }
}


export const fetchProducts = () => {
    return async function(dispatch) {

        await axios.get("https://fakestoreapi.com/products")
            .then(resonse =>{
                const products = resonse.data;
                dispatch(setProducts(products))
            })
            .catch(error => {
                const errorMsg = error.message;
                console.log( "Error : ", errorMsg);
            })
    }
}

export const fetchSingleProduct = (id) => {
    return async function (dispatch ) {
        await axios.get(`https://fakestoreapi.com/products/${id}`)
            .then( responce => {
                const singleProduct =  responce.data;
                dispatch(selectedProduct(singleProduct));
                console.log("Fetch single product ", singleProduct);
            })
            .catch( error => {
                const errorMsg = error.message;
                console.log( "Error : ", errorMsg);
            })
    }
}