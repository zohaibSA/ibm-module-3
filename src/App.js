import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/LandingPage/Landing_Page';


import Navbar from './Components/Navbar/Navbar';
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Route path="/" element={<Landing_Page/>}/>




              <Routes>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;