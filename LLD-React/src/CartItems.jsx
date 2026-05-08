import "./CSS/cartItem.css";
import { useState } from "react";

const CartItems = ({ products }) => {
  const [itemsSelected, setItemsSelected] = useState([]);

  function addCartList(product) {
    setItemsSelected((prevItems) => [...prevItems, product]);
  }

  const totalPrice = itemsSelected.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h2>Product List</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            {product.name} - ${product.price}
            <button
              onClick={() => {
                addCartList(product);
              }}
            >
              Select
            </button>
          </li>
        ))}
      </ul>

      <h3>Cart Items:</h3>

      {itemsSelected.length === 0 ? (
        <p>No items selected.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {itemsSelected.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}

      <h4>Total: ${totalPrice}</h4>
    </div>
  );
};

export default CartItems;
