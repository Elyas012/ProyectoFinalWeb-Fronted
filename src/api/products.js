// client/src/api/products.js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
const baseUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;

export const fetchProducts = async () => {
  const res = await fetch(`${baseUrl}/products`);
  if (!res.ok) throw new Error('Error al cargar productos');
  return res.json();
};

