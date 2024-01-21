import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/Navbar";
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/register" element={<Login/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
