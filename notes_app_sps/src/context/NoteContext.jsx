import { createContext, useState, useContext } from "react";
import { createNoteRequest, getNotesRequest, updateNoteRequest, deleteNoteRequest, getNoteRequest } from "../api/note";

const NoteContext = createContext();

export const useNotes = () => {
    const context = useContext(NoteContext);

    if(!context) throw new Error("useNotes must be used within an AuthProvider") 
    return context;
}

// eslint-disable-next-line react/prop-types
export function NoteProvider({children}){
    const [notes,setNotes] = useState([]);

    const getNotes = async () => {
        try {
            const res = await getNotesRequest();
            setNotes(res.data);
            console.log(res) 
        } catch (error) {
            console.log(error)
        }
    }

    const getNote = async(id) =>{
        const res = await getNoteRequest(id);
        return res.data;
    }

    const updateNote = async(note)=>{
        await updateNoteRequest(note);
    }

    const createNote= async(note)=>{
        await createNoteRequest(note);
    }

    const deleteNote = async(id)=>{
        await deleteNoteRequest(id);
        await getNotes();
    }

    return(
        <NoteContext.Provider value={{
            notes,
            createNote,
            getNotes,
            getNote,
            updateNote,
            deleteNote
            
            }}>
            {children}
        </NoteContext.Provider>
    )

}