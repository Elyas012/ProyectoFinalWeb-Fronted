// client/src/components/CartSidebar.jsx
import React from 'react';
import useCart from '../hooks/useCart';
import CartItem from './CartItem';

export default function CartSidebar() {
  const { items, subtotal, taxes, total, clearCart } = useCart();

  return (
    <div className="card p-3 mb-4">
      <h4 className="card-title">Carrito</h4>
      {items.length === 0 ? (
        <p className="text-muted">El carrito está vacío</p>
      ) : (
        <>
          <div className="list-group mb-3">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item d-flex justify-content-between">
              <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Impuestos (12%)</span><span>${taxes.toFixed(2)}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Total</strong><strong>${total.toFixed(2)}</strong>
            </li>
          </ul>
          <button className="btn btn-danger w-100" onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}