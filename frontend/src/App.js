import React,{lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
const Homepage=lazy(()=>import("./pages/Homepage"));
const CartPage=lazy(()=>import("./pages/CartPage"));
const LoginPage=lazy(()=>import("./pages/LoginPage"));
const GetBakeries=lazy(()=>import("./pages/GetBakeries"));
const RegisterPage =lazy(()=>import("./pages/PageRegister"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/home" element={<Homepage/>} /> {/* Home page route */}
              <Route path="/bakeries/:bakeryId" element={<GetBakeries />} /> {/* New page route */}
              <Route path="/cart" element={<CartPage/>} /> {/* New page route */}
              <Route path="/register" element={<RegisterPage/>}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
