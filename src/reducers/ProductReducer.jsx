import { createSlice } from "@reduxjs/toolkit";


const initialState = { 
    products : [ ]  // the initial state of the products array is empty 
} ; 
export const ProductSlice = createSlice ( { 
    name : "Products" , // we first name the slice we are creating 
    initialState , 
    reducers : { 
        getProducts :  ( state , action ) => { 
            state.products = action.payload  // reducer to set the products array values 
            // action.payload is the value recived from the products api ( in the productactions file )

        }
    },
})
export default ProductSlice.reducer // here we need to export the reducer 
export const {getProducts} = ProductSlice.actions // here we need to export the actions present in the reducer 