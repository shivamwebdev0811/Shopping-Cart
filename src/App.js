import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import './App.css'
import { Toaster } from "react-hot-toast";
const App=()=>{
  return <div>
    <div className="bg-slate-900 text-white" >
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/*" element={<p>404 not found</p>}/>
    </Routes>
    <Toaster/>
  </div>;
}
export default App