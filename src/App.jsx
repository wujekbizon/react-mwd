import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const user = true;

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
    </Routes>
  );
};

export default App;
