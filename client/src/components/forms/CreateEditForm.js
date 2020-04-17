import React from 'react';

const CreateEditForm = (props) => {
  const {product, onSubmitProp, onChangeProp} = props;
  
  return(
    <form onSubmit={onSubmitProp}>
        <p>
            <label>Title</label><br/>
            <input type="text" name="title" value={product.title} onChange={onChangeProp} />
        </p>
        <p>
            <label>Price</label><br/>
            <input type="text" name="price" value={product.price} onChange={onChangeProp} />
        </p>
        <p>
            <label>Description</label><br/>
            <input type="text" name="description" value={product.description} onChange={onChangeProp} />
        </p>
        <input type="submit"/>
    </form>
  );
}

export default CreateEditForm;
