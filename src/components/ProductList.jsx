// client/src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import ProductCard from './ProductCard';


export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error)   return <p className="text-danger">Error: {error}</p>;

  return (
    <div className="row g-3">
      {products.map(p => (
        <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}