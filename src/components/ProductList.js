import React, { useState } from 'react';
import Product from './Product';
import image1 from '../assets/elgrito.jpeg';
import image2 from '../assets/vangogh.jpg';

function ProductList() {
  const initialProducts = [
    {
        id: 1,
        image: image1,
        title: 'Obra Maestra 1',
        description: 'Descripción del producto 1',
        isSoldOut: false,
        purchasedBy: null,
      },
      {
        id: 2,
        image: image2,
        title: 'Obra Maestra 2',
        description: 'Descripción del producto 2',
        isSoldOut: false,
        purchasedBy: null,
      },
      {
        id: 3,
        image: image1,
        title: 'Obra Maestra 3',
        description: 'Descripción del producto 3',
        isSoldOut: false,
        purchasedBy: null,
      },
      {
        id: 4,
        image: image2,
        title: 'Obra Maestra 4',
        description: 'Descripción del producto 4',
        isSoldOut: false,
        purchasedBy: null,
      },
      {
        id: 5,
        image: image1,
        title: 'Obra Maestra 5',
        description: 'Descripción del producto 5',
        isSoldOut: false,
        purchasedBy: null,
      },
      {
        id: 6,
        image: image2,
        title: 'Obra Maestra 6',
        description: 'Descripción del producto 6',
        isSoldOut: false,
        purchasedBy: null,
      },
      {
        id: 7,
        image: image1,
        title: 'Obra Maestra 7',
        description: 'Descripción del producto 7',
        isSoldOut: false,
        purchasedBy: null,
      },
      {
        id: 8,
        image: image2,
        title: 'Obra Maestra 8',
        description: 'Descripción del producto 8',
        isSoldOut: false,
        purchasedBy: null,
      }
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleBuy = (id, username) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id
          ? { ...product, isSoldOut: true, purchasedBy: username }
          : product
      )
    );
  };

  return (
    <div style={{ marginBottom: '180px' }}>
      <h2>Obras</h2>
      {products.map(product => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          isSoldOut={product.isSoldOut}
          purchasedBy={product.purchasedBy}
          onBuy={() => handleBuy(product.id, 'Usuario1')} // Aquí puedes reemplazar 'Usuario1' con el nombre real del usuario
        />
      ))}
    </div>
  );
}

export default ProductList;
