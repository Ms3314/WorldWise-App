import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import Product from "./pages/Product"
import Homepage from "./pages/Homepage"
import Pricingpage from "./pages/Pricing"
import PagenotFound from "./pages/PageNotFound"
// import Navbar from "./components/Navbar"
function App() {
  return (
  <BrowserRouter>
    
  <Routes>
      <Route path="product" element={<Product/>} />
      <Route path="pricing" element={<Pricingpage/>} />
      <Route path="/" element={<Homepage/>} />
      <Route path="*" element={<PagenotFound/>} />
  </Routes>
  </BrowserRouter>
  ) 
}

export default App
