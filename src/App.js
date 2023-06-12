import React from 'react';

import { AboutUs, Footer, Header, Mission, Programs } from './container';
import { Navbar } from './components';
import './App.css';

/*  Home page order of each containter */
const App = () => (
  <div>
    <Navbar />
    <Header />
    <Mission />
    <Programs />
    <AboutUs />
    <Footer />
  </div>
);

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