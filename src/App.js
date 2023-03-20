import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AddNewTask from "./components/AddNewTask/AddNewTask";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-new-task" element={<AddNewTask/>} />
      </Routes>
    </Router>
  );
}

export default App;
