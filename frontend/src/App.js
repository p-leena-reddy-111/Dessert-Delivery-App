import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import GetBakeries from "./pages/GetBakeries";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} /> {/* Home page route */}
          <Route path="/bakeries/:bakeryId" element={<GetBakeries />} /> {/* New page route */}
          <Route path="/cart" element={<CartPage/>} /> {/* New page route */}
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
