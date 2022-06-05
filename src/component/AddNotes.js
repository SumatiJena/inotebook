import React, {useState, useContext } from "react";
import NoteContext from "./context/Notecontext";
const AddNotes = () => {
    const context=useContext(NoteContext);
    const {addNotes}=context;
    const [notes,setNotes]=useState({title:'',description:'',tag:''});
    const handleClick=(e)=>{
        e.preventDefault();
        addNotes(notes.title,notes.description,notes.tag)
    }
   const handlechange=(e)=>{
    setNotes({...notes, [e.target.name]: e.target.value})
   }
  return (
    <div>
       <div className="my-4">
      <form>
        <div className="form-group">
          <label htmlFor="title">Email address</label>
          <input
            type="text"
            class="form-control"
            id="title"
            name='title'
            aria-describedby="emailHelp"
            placeholder="title"
            onChange={handlechange}
          />
        </div>
        <div  className="form-group">
          <label for="description">Password</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name='description'
            placeholder="Password"
            onChange={handlechange}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
     
    </div>
    </div>
  )
}

export default AddNotes
