import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Buy.css';

const Buy = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace with your backend endpoint
    const url = 'http://localhost:9000/api/v1/products/products';

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('An error occurred while fetching the products:', error);
      });
  }, []);

  return (
    <div className="buy-container">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
        {console.log(product.image_path)}
          <img src={require("./images/product_1.png")} alt="Product" className="product-image" />
          <p className="product-price">{product.price}</p>
          <p className='product-name'>{product.name}</p>
          <button className="buy-button">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default Buy;