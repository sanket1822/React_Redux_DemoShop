import { SELECTED_PRODUCT, SET_PRODUCTS, REMOVE_SELECTED_PRODUCT } from "./shopTypes"

const initialState = {
    products:[]
}

const initialSingleState = {
    product:[]
}

 export const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PRODUCTS : return{
            ...state,
            products : action.payload
        }
        default: return state
    }
}


export const selectedProductReducer = (state = {}, action) =>{
    switch(action.type){
        case SELECTED_PRODUCT : return {
            ...state,
           ...action.payload
        }
        case REMOVE_SELECTED_PRODUCT : return {}
        default : return state;
    }
}

