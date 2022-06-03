import { useState } from 'react';
import NoteContext from './Notecontext';

const NoteState = (props) => {
    const s1={
        Name:"Sibu",
        class:"5b"
    }
    const[state,setState]=useState(s1)
    const update=()=>{
        setTimeout(function(){
            setState({
                Name:"bini",
                class:"10th"
            })
        },10000)
    }
  return (
    <div>
      <NoteContext.Provider value={{state,update}}>
          {props.children}
      </NoteContext.Provider>
    </div>
  )
}
export default NoteState;
