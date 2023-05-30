import React, { useState } from 'react';
import './style.css';
import { commerce } from '@chec/commerce.js';

const products = [
  { id: 1, name: "Product 1", price: "$10", category: "Category 1", image: require("./images/product1.jpg").default },
  { id: 2, name: "Product 2", price: "$20", category: "Category 1" },
  { id: 3, name: "Product 3", price: "$30", category: "Category 1" },
  { id: 4, name: "Product 4", price: "$10", category: "Category 2" },
  { id: 5, name: "Product 5", price: "$20", category: "Category 2" },
  { id: 6, name: "Product 6", price: "$30", category: "Category 2" },
  { id: 7, name: "Product 7", price: "$10", category: "Category 3" },
  { id: 8, name: "Product 8", price: "$20", category: "Category 3" },
  { id: 9, name: "Product 9", price: "$30", category: "Category 3" },
  // add more products as needed
];

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
   
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const addToCart = async (product) => {
    try {
      const item = await commerce.cart.add(product.id, 1);
      console.log(`Product ${product.name} added to cart. Current cart:`, item.cart);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <>
      <h2>Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div
            className="product"
            key={product.id}
            onClick={() => handleProductClick(product)}
          >
            {product.image && <img src={product.image} alt={product.name} />}
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={(e) => { e.stopPropagation(); addToCart(product); }}>Add to Cart</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup">
          <h3>{selectedProduct.name}</h3>
          <p>{selectedProduct.price}</p>
          <button onClick={() => setSelectedProduct(null)}>Close</button>
        </div>
      )}
    </>
  );
}
