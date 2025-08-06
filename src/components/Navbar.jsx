// client/src/components/Navbar.jsx
import React from 'react';
import useCart from '../hooks/useCart';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { items, total } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">Mi Tienda</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaShoppingCart className="me-1" /> {items.length} items - ${total.toFixed(2)}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;