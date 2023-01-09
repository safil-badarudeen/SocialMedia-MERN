import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
