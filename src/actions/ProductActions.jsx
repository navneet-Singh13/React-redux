import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";
 // this is only the method by which we can use asynchronous code with the redux toolkit 
 // This is done by making the higher order function which gives us the functionality of dispatch 
export const asyncgetproducts = ( ) => async (dispatch , getState) => { 
     try {
        const res = await axios.get("https://fakestoreapi.com/products")
        //  console.log (res.data )
        // we are creating function inside function which is called a higher order function  
        dispatch(getProducts( res.data )) 
        // dispatch sends the data to the getproducts function that is present in the Productreducer 
     }
     catch( err ){ 
        console.log( err )  ; 
     }
}