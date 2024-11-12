import React from 'react';
import '../styles/product.css'; // Asegúrate de que esta ruta sea correcta

function Product({ image, title, description, isSoldOut, purchasedBy, onBuy }) {
    return (
      <div className="product-card">
        <img src={image} alt="Producto" className="product-image" />
        <div className="product-details">
          <h3 className="product-title">{title}</h3>
          <p>{description}</p>
          <div className="availability">
            {isSoldOut ? (
              <p className="sold-out">SOLD OUT - Comprado por: {purchasedBy}</p>
            ) : (
              <p className="available">Disponible</p>
            )}
          </div>
          {isSoldOut ? null : (
            <button className="buy-button" onClick={onBuy}>BUY</button>
          )}
        </div>
      </div>
    );
  }
  
  export default Product;
