
import React from "react";
import NoteContext from "./context/Notecontext";

const Noteitem = (props) => {
    const {note}=props;
  return (
     
    <div className="col-md-3">
        <div  className="card">
        <img src="..."  className="card-img-top" alt="..."/>
        <div  className="card-body">
            <div className="d-flex align-items-center">
                <h5  className="card-title mx-2">{note.title}</h5>
                <i class="fa-regular fa-trash-can mx-2"></i>
                <i class="fa-regular fa-pen-to-square mx-2"></i>
            </div>
            <p  className="card-text">{note.description}</p>
            
        </div>
        </div>
    </div>
  )
}

export default Noteitem
