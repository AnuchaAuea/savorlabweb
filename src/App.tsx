import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ProductGrid from "./components/productGrid/ProductGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Routes>
      </BrowserRouter>
      <div>main</div>
      <ProductGrid
        productDetail={{
          sku: "1111",
          name: "Product Test",
          description: "This massage for test discription of product",
          price: 999.253,
          currency: "THB",
          imageUrl:
            "https://images.unsplash.com/photo-1588018025171-0581d0189080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        }}
      ></ProductGrid>
    </div>
  );
}

export default App;
