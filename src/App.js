import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './component/context/NoteState';

function App() {
  
  return (
    <>
    <NoteState>
      <BrowserRouter>
      <Navbar/>
      <div className='container'>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          
        </Routes>
        </div>
        </BrowserRouter>
        </NoteState>
     
    </>
  );
}

export default App;
