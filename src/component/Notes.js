import NoteContext from "./context/Notecontext";
import Noteitem from "./Noteitem";
import React, { useContext } from "react";

const Notes = () => {
 const context=useContext(NoteContext)
  const {notes,setNotes}=context;
  return (
    <div>
       <div className="row my-2">
       {notes.map((note)=>{
          return <Noteitem note={note} key={note.id}/>
          })}
      </div>
    </div>
  )
}

export default Notes
