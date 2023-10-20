import { useEffect, useState } from "react";
import { useUsers } from "../context/UserContext";
import { useForm } from "react-hook-form";
import { useNotes } from "../context/NoteContext";
import { useParams,useNavigate  } from "react-router-dom";

function NoteFormPage() {
    const { register,handleSubmit,reset } = useForm();
    const { getUsers,users } = useUsers();
    const { createNote,getNote,updateNote } = useNotes();
    const { id } = useParams();
    const navigate= useNavigate();

    const onSubmit= handleSubmit(async(data)=>{
        if(id) {
            await updateNote({'_id':id,...data})
            navigate('/')
        }
        else createNote(data);
        reset();
      })

    const handleGetNote= async()=>{
        const data=await getNote(id);
        reset({
            'user':data.user._id,
            'title':data.title,
            'content':data.content,
            'date':data.date.substring(0, 10)
        })
    }

    useEffect(()=>{
        getUsers();
        handleGetNote();
    },[])

  return (
    <div className="w-full flex justify-center pt-20">
        <div className="bg-white max-w-md w-3/4">
            <form onSubmit={onSubmit} className="p-4 space-y-3">
                <p className="text-xl font-semibold">Create Note</p>
                <select className="w-full px-2 py-1 border-2 border-solid" name="" id="" {...register("user")}>
                    {
                        users.map((user)=>{
                            return(
                                <option key={user._id} value={user._id}>{user.name}</option>
                            )
                        })
                    }

                </select>
                <input className="w-full px-2 py-1 border-2 border-solid" type="text" placeholder="title" {...register("title")} />
                <textarea className="w-full px-2 py-1 border-2 border-solid" cols="10" rows="2" placeholder="content" {...register("content")}/>
                <input className="w-5/12 px-2 py-1 border-2 border-solid block" type="date"  {...register("date")} />

                <button type="submit" className="bg-blue-600 text-white px-3 py-1">Save</button>
            </form>
        </div>

    </div>
  )
}
export default NoteFormPage