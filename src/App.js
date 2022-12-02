import React from 'react';
import NavigationBar from './components/navigation';
import { About } from './pages/about';
import { Career } from './pages/career';
import { Projects } from './pages/projects';
import { NotFound } from './pages/notfound';
import { Blog } from './pages/blog'
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
          <Route path="/" element={<About />} />

          <Route path="/career" element={<Career />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
