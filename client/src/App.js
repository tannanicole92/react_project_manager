import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import ProductList from './views/ProductList';
import CreateEditProduct from './views/CreateEditProduct';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/'/>
        <ProductDetails path="/products/details/:id" />
        <ProductList path="/products" />
        <CreateEditProduct path="/products/create" />
        <CreateEditProduct path="/products/update/:id" />
      </Router>
    </div>
  );
}

export default App;
