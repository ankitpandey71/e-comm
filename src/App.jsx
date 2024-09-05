import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
