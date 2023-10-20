import { useEffect } from "react"
import { useUsers } from "../context/UserContext"
import {useForm} from 'react-hook-form'


function UserPage() {
    const { register,handleSubmit,reset } = useForm();
    const { createUser,getUsers,users } = useUsers();

  const onSubmit= handleSubmit(async(data)=>{
    createUser(data);
    reset();
  })


    
  useEffect(()=>{
    getUsers();
  },[])
  
    return (
    <div className="md:flex md:justify-between py-9 px-20">
        <div className="bg-white w-full md:w-2/5 p-4 mr-10 h-40">
            <form onSubmit={onSubmit} className="space-y-3">
                <span className="font-semibold text-2xl">Create new user</span>
                <input type="text"  className="w-full focus:border-blue-400 focus:outline-none focus:ring-0 border-2 border-solid shadow-md px-2 py-1" autoFocus={true} {...register("name")} />
                <button type="submit" className="bg-blue-600 text-white px-3 py-1">Save</button>
            </form>
        </div>

        <div className="bg-gray-200 w-full md:w-3/5 p-1 space-y-1 items-start">
            {
                users.map((user)=>{
                    return (
                        <div key={user._id} className="bg-white p-2">
                            <p>{user.name}</p>
                        </div>
                    )
                })
            }

        </div>

    </div>
  )
}
export default UserPage