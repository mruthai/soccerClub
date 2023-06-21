import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import Program from './views/Program/Program';
import Resources from './views/Resources/Resources';
import Coaching from './views/Coaching/Coaching';
import Competitive from './views/Competitive/Competitive'




const App = () => {
  
  return (

    


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/competitive" element={<Competitive />} />
      </Routes>
      
  );
}
export default App;

