import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";

import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const userDetails = useSelector((state)=>state.user);
  const user = userDetails.user
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/signup" element={user !== null ? <Navigate to={"/"}/> :<Signup />} />
          <Route path="/login" element={user !== null ? <Navigate to={"/"}/> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
