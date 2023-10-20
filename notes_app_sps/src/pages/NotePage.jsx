import { useEffect } from "react";
import Card from "../components/Card";
import { useNotes } from "../context/NoteContext";

function NotePage() {

    const { getNotes, deleteNote, notes } = useNotes();


    useEffect(()=>{
        getNotes();
      },[])

  return (
    <div className="flex flex-wrap justify-evenly px-10 py-6">{
        notes.map((note)=>{
            return(
                <Card key={note._id} note={note} onDelete={deleteNote} />
            )
        })
        }</div>
  )
}
export default NotePage