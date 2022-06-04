import { useState } from 'react';
import NoteContext from './Notecontext';

const NoteState = (props) => {
  const noteInitial=[
    {
      "id":"62648249030218776",
      "user":"jjef438599599",
      "title":"My title",
      "description":"please wake up early",
      "tag":"personaly",
      "date":"2022-06-03"
  }, {
    "id":"6264824903020987",
    "user":"jjef438599778",
    "title":"My title",
    "description":"Your hav an interview",
    "tag":"personaly",
    "date":"2022-06-03"
}

]
const [notes,setNotes]=useState(noteInitial)
  return (
    <div>
      <NoteContext.Provider value={{notes,setNotes}}>
          {props.children}
      </NoteContext.Provider>
    </div>
  )
}
export default NoteState;
