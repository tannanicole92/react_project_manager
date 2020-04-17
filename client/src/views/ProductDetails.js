import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import ItemDetails from '../components/ItemDetails';
import axios from 'axios';

const ProductDetails = (props) => {
  const [ product, setProduct ] = useState('');
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/products/' + props.id)
      .then((res) => {
        setProduct({
          title: res.data.title,
          price: res.data.price,
          description: res.data.description

        });
        setLoaded(true);
      })
      .catch(err => console.log(err));

  }, [props]);

  return(
    <div>
    {loaded &&
      <div>
        <Link to={'/products'}>Back to All Products</Link>
        <ItemDetails item={product} />
      </div>
    }
    </div>
  );
}

export default ProductDetails;
