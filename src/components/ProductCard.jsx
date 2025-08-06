// client/src/components/ProductCard.jsx
import React from 'react';
import useCart from '../hooks/useCart';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    toast.success(`${product.name} agregado al carrito!`);
  };

  const priceNum = Number(product.price);

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={product.image} 
        alt={product.name} 
        className="card-img-top" 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text flex-grow-1">
          ${isNaN(priceNum) ? '0.00' : priceNum.toFixed(2)}
        </p>
        <button className="btn btn-outline-primary mt-auto" onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}


