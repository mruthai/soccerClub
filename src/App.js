import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import Program from './views/Program/Program';
import Resources from './views/Resources/Resources';
import Coaching from './views/Coaching/Coaching';



const App = () => {
  
  return (

    


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/coaching" element={<Coaching />} />
      </Routes>
      
  );
}
export default App;

