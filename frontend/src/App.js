import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./Customer";
import Home from "./Home";
import Create from "./Create";
import SignUp from "./SignUp";
import Login from "./Login";
import Read from "./Read";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read/:sl" element={<Read />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
