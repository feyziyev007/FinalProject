import React, {useState, useEffect} from 'react';
import style from './style.scss';
import ListItem from './Components/ListItem/ListItem';
import Categories from './Components/ProductsList/categories';
import Price from './Components/Price/Price';


export default function PagePLP() {

    const [productData, setProductData] = useState([]);

    console.log(productData);

    async function getProduct() {
        const productUrl = " https://my-json-server.typicode.com/nianman/json-mock2/products";
        const response = await fetch(productUrl);
        const data = await response.json();
        setProductData(data);
    }


    useEffect(() => {
        getProduct();
    }, []);
    // console.log(products);

    return (


        <form className="clothes">


            {productData.map(item => {
                return (<div>
                    <div className='categoriesList'>

                    </div>


                    <div className='productList'><Categories img={item.images} description={item.description}
                                                             color={item.color} size={item.size}
                                                             category={item.category} fit={item.fit} price={item.price}
                                                             brand={item.brand}
                                                             class_name='clothes__subclass'/></div>
                </div>);
            })}
            {/*<Price/>*/}
        </form>
    );
}
// const a = fetch("https://58e22bfd-5fc0-4bd8-87d1-44fd691df288.mock.pstmn.io/products").then(res => res.json());
// console.log(a);0