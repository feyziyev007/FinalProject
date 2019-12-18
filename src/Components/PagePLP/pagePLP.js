import React from 'react';
import style from './style.scss';
import ListItem from './Components/ListItem/ListItem';
import Categories from "./Components/Categories/categories";
import Price from "./Components/Price/Price";


export default function PagePLP() {

    async function getProduct() {
        const productUrl = "https://58e22bfd-5fc0-4bd8-87d1-44fd691df288.mock.pstmn.io/products";
        const response = await fetch(productUrl);
        const data = await response.json();
        return data;
    }

    let products=getProduct();
    console.log(products);

    return (


        <form className="clothes">


            {products.map(item => {
                return (<Categories category={item.category} fit={item.fit} brand={item.brand}
                                    class_name='clothes__subclass'/>);
            })}
            {/*<Price/>*/}
        </form>
    );
}
// const a = fetch("https://58e22bfd-5fc0-4bd8-87d1-44fd691df288.mock.pstmn.io/products").then(res => res.json());
// console.log(a);