import React from 'react';
import { Link } from '@reach/router';

const Main = () => {
  return(
    <div>
      <h1>Product Manager</h1>
      <ul>
      <li><Link to="/products/create">Create Product</Link></li>
      <li><Link to="/products">All Products</Link></li>
      </ul>
    </div>
  );
}

export default Main;
