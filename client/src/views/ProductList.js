import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import ListItems from '../components/ListItems';
import axios from 'axios';

const ProductList = () => {
  //keep track of what is being typed via useState hook
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));

  }, []);

  const deleteProduct = (product) => {
    axios.delete('http://localhost:8000/api/products/delete/' + product._id)
      .then((res) => {
        setProducts(products.filter(p => p._id !== product._id));
      })
      .catch(err => console.log(err));
  }

  const updateProduct = (id) => {
    navigate("/products/update/"+ id);
  }
  //handler when the form is submitted
  //onChange to update firstName and lastName
  return (
    <div>
    { loaded &&
      <div>
        <Link to="/">Back to Home</Link>
        <ListItems items={products} itemLink='/products/details/' updateItem={updateProduct} deleteItem={deleteProduct} />
      </div>
    }
    </div>
  );
}

export default ProductList;
