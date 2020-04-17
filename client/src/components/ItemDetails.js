import React from 'react';

const ItemDetails = (props) => {
  const { item } = props;

  return(
    <div>
    {
      Object.keys(item).map((key, i) => (
        <div>
         <b>{key}: </b>
         <span>{item[key]}</span>
        </div>
      ))
    }
    </div>
  );
}

export default ItemDetails;
