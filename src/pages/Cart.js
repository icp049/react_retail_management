import React, { useEffect, useState } from 'react';
import { commerce } from '@chec/commerce.js';

export default function Cart({ products }) {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      const { cart } = await commerce.cart.retrieve();
      setCart(cart);
    };

    fetchCart();
  }, []);

  const handleEmptyCart = async () => {
    await commerce.cart.empty();
    setCart(null);
  };

  if (!cart) {
    return <p>Loading cart...</p>;
  }

  return (
    <div>
      <h2>Cart</h2>

      {cart.line_items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.line_items.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price.formatted_with_symbol}</p>
            </div>
          ))}

          <button onClick={handleEmptyCart}>Empty Cart</button>
        </>
      )}
    </div>
  );
}
