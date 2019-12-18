import React from 'react';
import style from './style.scss';
import ListItem from './Components/ListItem/ListItem';
import Categories from "./Components/Categories/categories";
import Price from "./Components/Price/Price";

export default function PagePLP() {
  const listCategory = [
    {category: 'male'},
    {category: 'female'},
    {category: 'children'},
    {size: 'small'},
    {size: 'medium'},
    {size: 'large'},
    {brand: 'lee'},
    {brand:'levis'},
    {brand:'wrangler'}
  ];


  return (

    <form className="clothes">


      {listCategory.map(item => {
        return <Categories category={item.category} size={item.size} brand = {item.brand} class_name='clothes__subclass' />;
      })}
      <Price/>
    </form>
  );
}
const a = fetch("https://58e22bfd-5fc0-4bd8-87d1-44fd691df288.mock.pstmn.io/products").then(res => console.log(res.json()));
console.log(a);