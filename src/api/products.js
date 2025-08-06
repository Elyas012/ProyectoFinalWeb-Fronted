// client/src/api/products.js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export const fetchProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error('Error al cargar productos');
  return res.json();
};
