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
      <div className="welcome-screen d-flex flex-column justify-content-center align-items-center vh-100 text-center text-white px-4">
        <div className="welcome-content p-4 rounded shadow-lg" style={{ maxWidth: 600, background: 'rgba(0,0,0,0.6)' }}>
          <h1 className="mb-3 display-4 fw-bold" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            ¡Bienvenido a <span style={{ color: '#00d2ff' }}>Tienda React</span>!
          </h1>
          <p className="mb-4 fs-5" style={{ lineHeight: '1.6' }}>
            Explora nuestra variedad de productos de alta calidad. Compra fácil y rápido, recibe en tu domicilio y disfruta de la mejor experiencia de compra online.
          </p>
          <button
            className="btn btn-gradient btn-lg px-5 py-3 fw-semibold"
            onClick={handleStart}
            style={{
              borderRadius: '50px',
              background: 'linear-gradient(45deg, #00d2ff, #3a47d5)',
              border: 'none',
              boxShadow: '0 4px 15px rgba(0, 210, 255, 0.5)',
              transition: 'all 0.3s ease',
              color: 'white',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'linear-gradient(45deg, #3a47d5, #00d2ff)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(58, 71, 213, 0.7)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'linear-gradient(45deg, #00d2ff, #3a47d5)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 210, 255, 0.5)';
            }}
          >
            Ver productos
          </button>
          <small className="d-block mt-4" style={{ opacity: 0.7 }}>
            © 2025 Tienda React. Todos los derechos reservados.
          </small>
        </div>
      </div>
    );
  }

  return (
    <CartProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
              <div className="container my-4 flex-grow-1">
                <div className="row">
                  <div className="col-lg-8 mb-4">
                      <h1 className="mb-4 text-center">Tienda React</h1>
                      <h1 className="mb-4 text-center fw-bold" style={{letterSpacing:'1px'}}>Catálogo de Productos</h1>
                      <ProductList />
                  </div>
                  <div className="col-lg-4">
                      <div className="sticky-top" style={{top:'100px'}}>
                        <CartSidebar />
                        <CheckoutForm />
                      </div>
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
