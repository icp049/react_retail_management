import { useState } from 'react';
import './style.css';


const products = [
  { name: "Product 1", price: "$10", category: "Category 1", image: require("./images/product1.jpg").default },
  { name: "Product 2", price: "$20", category: "Category 1" },
  { name: "Product 3", price: "$30", category: "Category 1" },
  { name: "Product 4", price: "$10", category: "Category 2" },
  { name: "Product 5", price: "$20", category: "Category 2" },
  { name: "Product 6", price: "$30", category: "Category 2" },
  { name: "Product 7", price: "$10", category: "Category 3" },
  { name: "Product 8", price: "$20", category: "Category 3" },
  { name: "Product 9", price: "$30", category: "Category 3" },
  // add more products as needed
];

export default function Contact() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log(`Product "${product.name}" added to the cart.`);
  }

  return (
    <>
      <h2>Products</h2>

      <div className="category-buttons">
        <button onClick={() => handleCategoryClick(null)}>All</button>
        <button onClick={() => handleCategoryClick("Category 1")}>Category 1</button>
        <button onClick={() => handleCategoryClick("Category 2")}>Category 2</button>
        <button onClick={() => handleCategoryClick("Category 3")}>Category 3</button>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product" key={product.name} onClick={() => handleProductClick(product)}>
            {product.image && <img src={product.image} alt={product.name} />}
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={(event) => {
              event.stopPropagation();
              handleAddToCart(product);
            }}>Add to Cart</button>
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
