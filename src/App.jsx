import React from 'react'
import { Link  , Route , Routes} from 'react-router-dom'
import Users from './components/Users'
import Products from './components/Products'
import Home from './components/Home'
// here all the linking is done with the help of react router dom , each path is mapped to the element we require to fetch 
const App = () => {
  return (
    <div className='w-screen h-screen'>
     <nav className='py-5 flex justify-center gap-10'> 
    
      <Link to = "/users">Users </Link>  
      <Link to = "/products">Products </Link>
      <Link to = "/">Home </Link>
     </nav>
     <Routes>
      <Route path ="/" element = { <Home/>}></Route>
      <Route path ="/users" element = { <Users/>}></Route>
      <Route path ="/products" element = { <Products/>}></Route>
     </Routes>
    </div>
  )
}

export default App
