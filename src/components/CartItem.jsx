// client/src/components/CartItem.jsx
import React from 'react';
import useCart from '../hooks/useCart';

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();
  return (
    <div className="list-group-item d-flex align-items-center">
      <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '0.75rem' }} />
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between">
          <h6 className="mb-1">{item.name}</h6>
          <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(item.id)}>×</button>
        </div>
        <div className="d-flex align-items-center mt-1">
          <input
            type="number"
            className="form-control form-control-sm me-2"
            style={{ width: '60px' }}
            min="1"
            value={item.quantity}
            onChange={e => updateQuantity(item.id, Number(e.target.value))}
          />
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}