import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs, Footer, Header, Mission, Programs } from './container';
import { Navbar } from './components';
import Home from './views/Home'
import ProgramCategory from './views/ProgramCategory/ProgramCategory';



const App = () => {

  return (

    <BrowserRouter>
      {/* <div>
        <Navbar />
      </div>
      <div>
        <Header />
        <Mission />
        <Programs />
        <AboutUs />
        <Footer />
      </div> */}
      <Home />
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/programs" component={<ProgramCategory />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;

// DROP Down
// const options = ['Option 1', 'Option 2', 'Option 3'];

// return (
//   <div>
//     <Dropdown options={options} onChange={(option) => {
//       console.log(option);
//     }} />
//   </div>
// );
// };