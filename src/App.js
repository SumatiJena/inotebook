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
import Alert from './component/Alert';

function App() {
  
  return (
    <>
    <NoteState>
      <BrowserRouter>
      <Navbar/>
      <Alert text={'you are added'}/>
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
