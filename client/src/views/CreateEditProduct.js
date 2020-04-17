import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import CreateEditForm from '../components/forms/CreateEditForm';
import axios from 'axios';

const CreateEditProduct = (props) => {
  const { id } = props;
  //keep track of what is being typed via useState hook
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: ""
  });
  useEffect(() => {
    if (id) {
      axios.get('http://localhost:8000/api/products/' + id)
        .then((res) => {
          setProduct({
            title: res.data.title,
            price: res.data.price,
            description: res.data.description
          });
        })
        .catch(err => console.log(err));
    }

  },[id]);
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
      //prevent default behavior of the submit
      e.preventDefault();
      //make a post request to create a new person
      if (id) {
        axios.put('http://localhost:8000/api/products/update/' + id, product)
            .then((res) => {
              console.log(res);
              setProduct(product);
              navigate('/products');
            })
            .catch(err=>console.log(err));
      } else {
        axios.post('http://localhost:8000/api/products/new', product)
            .then((res) => {
              console.log(res);
              setProduct({
                title: "",
                price: "",
                description: ""
              });
              navigate('/products');
            })
            .catch(err=>console.log(err))
      }
  }

  const onChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  }
  //onChange to update firstName and lastName
  return (
    <div>
    {!id ? <Link to="/">Back to Home</Link> : <Link to="/products">Back to Products</Link>}
    <CreateEditForm product={product} onChangeProp={onChange} onSubmitProp={onSubmitHandler} />
    </div>
  );
}

export default CreateEditProduct;
