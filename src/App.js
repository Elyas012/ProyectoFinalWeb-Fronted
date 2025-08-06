// client/src/App.js
import React from 'react';
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

function App() {
  return (
    <CartProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container my-4 flex-grow-1">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mb-4 text-center">Tienda ReactTeamBB</h1>
              <ProductList />
            </div>
            <div className="col-lg-4">
              <CartSidebar />
              <CheckoutForm />
            </div>
          </div>
        </div>
        <Footer />
        {/* ToastContainer debe ir aquí, a nivel global */}
        <ToastContainer
          position="bottom-right"
          autoClose={1500}       // Cierra automáticamente después de 1.5 segundos
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

export default App;
