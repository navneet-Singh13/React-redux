import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { deleteUser } from "../reducers/UserReducer";
function Users() {
  const dispatch = useDispatch( )
   const {users} = useSelector((state) => state.UserReducer)
  return (
    <>
     <div className="bg-blue-700 m-auto container p-10 mt-5 ">
        <h1 className="text-white text-4xl font-semibold">Users List</h1>

        {users.map((user , index)=> {
          return <div key = {user.id} className="flex p-2">
            <h1 className="text-white text-xl">{user.name}</h1> <span className="ml-2 " onClick={()=>dispatch(deleteUser(index))}>  ❌ </span>
          </div>
        })}
     </div>
    </>
  )
}

export default Users
