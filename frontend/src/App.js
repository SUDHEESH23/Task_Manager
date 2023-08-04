import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Mycourses from "./components/mycourses";
import About from "./components/about";
import Update from "./components/update";
import './App.css';

function App() {
  return (
    <div className="app">
      <center>
        <h2>TASK MANAGER</h2>
      </center>
      <hr></hr>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Task List</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Mycourses />} />
          <Route path="/about" element={<About />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;