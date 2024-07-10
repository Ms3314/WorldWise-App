import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import Homepage from "./pages/Homepage"
import Pricingpage from "./pages/Pricingpage"
import PagenotFound from "./pages/PagenotFound"
import Navbar from "./components/Navbar"
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
