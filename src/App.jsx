import {BrowserRouter, Routes, Route} from "react-router-dom";

import './assets/styles/globals.scss'
import Login from './pages/Login/index.js';

const basename = import.meta.env.BASE_URL;

function App() {
    
  return (
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
