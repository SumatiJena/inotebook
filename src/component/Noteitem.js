
import React, { useContext } from "react";
import NoteContext from "./context/Notecontext";

const Noteitem = (props) => {
    const {note}=props;
  return (
     
    <div className="col-md-3">
        <div  className="card">
        <img src="..."  className="card-img-top" alt="..."/>
        <div  className="card-body">
            <h5  className="card-title">{note.title}</h5>
            <p  className="card-text">{note.description}</p>
            <a href="#"  className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
  )
}

export default Noteitem
