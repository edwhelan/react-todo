import React from 'react';

const List = (props) => {
  return (<ul className="lists">
    {props.items.map((item, index) => {
      return <li key={index}>{item}</li>;
    })}
  </ul>)
}

export default List;