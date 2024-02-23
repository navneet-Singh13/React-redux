import React, { useEffect } from 'react'
import { getProducts } from '../reducers/ProductReducer'
import { useDispatch, useSelector } from 'react-redux'
import { asyncgetproducts } from '../actions/ProductActions'
import ProductReducer from '../reducers/ProductReducer'
const Products = () => {
    const dispatch = useDispatch( ) ; 
    useEffect(()=>{
        // The asyncgetproducts function is present in the ProductActions file in the action folder 
        dispatch(asyncgetproducts())
    } ,[])
    // retrieving the products array from the product reducer 
    const { products} = useSelector( ( state ) => state.ProductReducer)
    // ------------------------------------------------------ // 
  return (
    <div>
      <div className="bg-blue-700 m-auto container p-10 mt-5 ">
        <h1 className="text-white text-4xl font-semibold">Products List</h1>

        {products.map((pro)=> { // simple mapping 
          return <div key = {pro.id} className="flex p-2">
            <h1 className="text-white text-xl">{pro.title}</h1> 
          </div>
        })}
        </div>
    </div>
  )
}

export default Products
