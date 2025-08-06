// client/src/components/CheckoutForm.jsx
import React, { useState } from 'react';
import useCart from '../hooks/useCart';

export default function CheckoutForm() {
  const { items, total, clearCart } = useCart();
  const [customer, setCustomer] = useState({ name: '', email: '', address: '' });
  const [message, setMessage]   = useState(null);

  const handleChange = e => setCustomer({ ...customer, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
      const baseUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;

      const res = await fetch(`${baseUrl}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer, items, total }),
      });
      const data = await res.json();
      setMessage(data.message);
      clearCart();
    } catch (err) {
      setMessage('Error procesando la compra');
    }
  };
  return (
    <div className="card p-3">
      <h5>Checkout</h5>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-12">
          <input name="name" className="form-control" placeholder="Nombre" value={customer.name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <input name="email" type="email" className="form-control" placeholder="Correo" value={customer.email} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <input name="address" className="form-control" placeholder="Dirección" value={customer.address} onChange={handleChange} required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success w-100">
            Confirmar (${total.toFixed(2)})
          </button>
        </div>
      </form>
    </div>
  );
}