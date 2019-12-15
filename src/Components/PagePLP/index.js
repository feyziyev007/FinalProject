import React from 'react';
import style from './style.scss';
import ListItem from "./Components/ListItem/ListItem";

export default function PagePLP(){
  const listItems = [
    {name: "Jackets", class: "clothes__subclass"},
    {name: "Shirts", class: "clothes__subclass"},
    {name: "Coats", class: "clothes__subclass"},
    {name: "Sweaters", class: "clothes__subclass"},
    {name: "Outwear", class: "clothes__subclass"},
    {name: "Polos & Tees", class: "clothes__subclass"},
    {name: "Jeans & Pants", class: "clothes__subclass"},
  ];


  return (
      <div className='clothes'>
        {listItems.map((item)=>{
          return <ListItem
          title={item.name}
          class_name={item.class}
          />
        })}
      </div>
  )}

