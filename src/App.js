import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

