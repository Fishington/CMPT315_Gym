import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login/index.js';
import Home from './pages/Home/Home.jsx';

import './assets/styles/globals.scss'

const basename = import.meta.env.BASE_URL;

function App() {
    
  return (
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
