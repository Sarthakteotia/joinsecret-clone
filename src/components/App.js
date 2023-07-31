// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Utils/Store'; // Assuming you have your Redux store setup in a separate file

import Home from './Home'
import About from './About';
import Contact from './Contact';
import Pricing from './Pricing';
import Signup from './Signup';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* Your navigation, header, or any other components that are not part of the routing */}
          {/* ... */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/signup" element={<Signup />} />
            {/* ... */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
