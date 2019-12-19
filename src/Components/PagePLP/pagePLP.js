import React, {useState, useEffect} from 'react';
import style from './style.scss';
import ListItem from './Components/ListItem/ListItem';
import Product from './Components/ProductsList/product';
import Price from './Components/Price/Price';


export default function PagePLP() {

    const [productData, setProductData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);

    console.log(productData);
    console.log(categoriesData);

    async function getProduct() {
        const productUrl = " https://my-json-server.typicode.com/nianman/json-mock2/products";
        const response = await fetch(productUrl);
        const data = await response.json();
        setProductData(data);
    }
    async  function getCategories(){
        const categoriesUrl = "https://my-json-server.typicode.com/nianman/json-mock2/categories";
        const response = await fetch(categoriesUrl);
        const categories = await response.json();
        setCategoriesData(categories);
    }

    useEffect(() => {
        getProduct();
        getCategories();
    }, []);
    // console.log(products);

    return (


        <form className="clothes">

            {categoriesData.map(item=>{
                return(
                    <div>
                        <div className='categoriesList'>
                                <ListItem listName={item.category}/>
                        </div>
                    </div>
                )
            })}
            {productData.map(item => {
                return (<div>



                    <div className='productList'><Product img={item.images} description={item.description}
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