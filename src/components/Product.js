import React from 'react';

function Product({ product }) {
  return (
    <div className="product">
      <span>{product.imagen}</span>
      <h3>{product.nombre}</h3>
      <p>Precio: ${product.importe}</p>
    </div>
  );
}

export default Product;