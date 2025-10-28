import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/globals/Navbar";
import CreateProductPage from "./pages/admin/products/Create-product";
import ShopPage from "./pages/shop";
import Footer from "./components/globals/Footer";
import { ToastContainer } from "react-toastify";
import SingleProductPage from "./components/shop/SingleProductPage";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:permalink" element={<SingleProductPage />} />
          {/* Admins */}
          <Route
            path="/admin/products/add-product"
            element={<CreateProductPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
