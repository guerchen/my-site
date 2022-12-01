import React from 'react';
import NavigationBar from './components/navigation';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div  className="App">
      <Router>
        <header  className="App-header">
          <NavigationBar/>
        </header>
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
