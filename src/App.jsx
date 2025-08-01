import "./App.css";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav.jsx"
import Users from "./pages/Users";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users/:id" element={<Users />} />
        </Routes>
      </Router>
  );
}

export default App;
