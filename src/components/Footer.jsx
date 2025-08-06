// client/src/components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="bg-light text-center py-3 mt-auto">
    <div className="container">
      <small>© {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</small>
    </div>
  </footer>
);

export default Footer;