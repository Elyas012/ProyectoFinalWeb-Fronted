// client/src/App.js
import React, { useState } from 'react';
import './App.css';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
import CheckoutForm from './components/CheckoutForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [showStore, setShowStore] = useState(false);

  const handleStart = () => setShowStore(true);

  if (!showStore) {
    return (
      <div className="welcome-screen d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light">
        <h1 className="mb-4" style={{ fontWeight: 'bold', fontSize: '3rem' }}>
          ¡Bienvenido a Tienda React!
        </h1>
        <button
          className="btn btn-primary btn-lg px-5"
          onClick={handleStart}
          style={{ borderRadius: '30px', fontWeight: '600', letterSpacing: '1.2px' }}
        >
          Ver productos
        </button>
      </div>
    );
  }

  return (
    <CartProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container my-4 flex-grow-1">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mb-4 text-center">Tienda React</h1>
              <ProductList />
            </div>
            <div className="col-lg-4">
              <CartSidebar />
              <CheckoutForm />
            </div>
          </div>
        </div>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </CartProvider>
  );
}
