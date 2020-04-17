import React from 'react';
import { Link } from '@reach/router';
import Button from './widgets/Button';

const ListItems = (props) => {
  const { items, itemLink, updateItem, deleteItem } = props;
  
  return(
    <div>
      <ul>
      {items.map((item, i) => (
        <li key={i}>
          <Link to={itemLink + item._id}>{item.title}</Link>
          <Button text="Edit" action={() => updateItem(item._id)}/>
          <Button text="Delete" action={() => deleteItem(item)}/>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default ListItems;
