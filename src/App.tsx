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
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div className="col">
            <ProductGrid
              productDetail={{
                sku: "1111",
                name: "Product Test1",
                description: "This massage for test discription of product",
                price: 999.253,
                currency: "THB",
                imageUrl:
                  "https://images.unsplash.com/photo-1588018025171-0581d0189080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
              }}
            ></ProductGrid>
          </div>
          <div className="col">
            <ProductGrid
              productDetail={{
                sku: "1111",
                name: "Product Test2",
                description: "This massage for test discription of product",
                price: 999.253,
                currency: "THB",
                imageUrl:
                  "https://images.unsplash.com/photo-1588018025171-0581d0189080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
              }}
            ></ProductGrid>
          </div>
          <div className="col">
            <ProductGrid
              productDetail={{
                sku: "1111",
                name: "Product Test3",
                description: "This massage for test discription of product",
                price: 999.253,
                currency: "THB",
                imageUrl:
                  "https://images.unsplash.com/photo-1588018025171-0581d0189080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
              }}
            ></ProductGrid>
          </div>
          <div className="col">
            <ProductGrid
              productDetail={{
                sku: "1111",
                name: "Product Test4",
                description: "This massage for test discription of product",
                price: 999.253,
                currency: "THB",
                imageUrl:
                  "https://images.unsplash.com/photo-1588018025171-0581d0189080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
              }}
            ></ProductGrid>
          </div>
          <div className="col">
            <ProductGrid
              productDetail={{
                sku: "1111",
                name: "Product Test5",
                description: "This massage for test discription of product",
                price: 999.253,
                currency: "THB",
                imageUrl:
                  "https://images.unsplash.com/photo-1588018025171-0581d0189080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
              }}
            ></ProductGrid>
          </div>
          <div className="col">
            <ProductGrid
              productDetail={{
                sku: "1111",
                name: "Product Test6",
                description: "This massage for test discription of product",
                price: 999.253,
                currency: "THB",
                imageUrl:
                  "https://images.unsplash.com/photo-1588018025171-0581d0189080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
              }}
            ></ProductGrid>
          </div>
          <div className="col">
            <ProductGrid
              productDetail={{
                sku: "1111",
                name: "Product Test7",
                description: "This massage for test discription of product",
                price: 999.253,
                currency: "THB",
                imageUrl:
                  "https://images.unsplash.com/photo-1588018025171-0581d0189080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
              }}
            ></ProductGrid>
          </div>
          <div className="col">
            <ProductGrid
              productDetail={{
                sku: "1111",
                name: "Product Test8",
                description: "This massage for test discription of product",
                price: 999.253,
                currency: "THB",
                imageUrl:
                  "https://images.unsplash.com/photo-1588018025171-0581d0189080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
              }}
            ></ProductGrid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
