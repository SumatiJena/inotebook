import React, { useContext, useEffect } from 'react';
import NoteContext from './context/Notecontext';

const About = () => {
    const a=useContext(NoteContext)
    useEffect(()=>{
        a.update();
    }, [])
  return (
    <div>
      This is about {a.state.Name}
    </div>
  )
}

export default About
