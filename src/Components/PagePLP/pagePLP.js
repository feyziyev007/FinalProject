import React, {useState, useEffect} from 'react';
import style from './style.scss';
import FilterItem from './Components/ListItem/FilterItem';
import Product from './Components/ProductsList/product';
import Price from './Components/Price/Price';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {filterProducts} from "../../actions/productAction";

function PagePLP(props) {
    const [productData, setProductData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);

    async function getProduct() {
        const productUrl = " https://my-json-server.typicode.com/nianman/json-mock2/products";
        const response = await fetch(productUrl);
        const data = await response.json();
        setProductData(data);
    }

    async function getCategories() {
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
    const productStyles={
        textDecoration:"none",
        color:'black'
    };

    console.log('SLK test props.filteredItems === ', props.filteredItems)
    return (
        <div className="clothes">
            <form className='categoriesList'>
                {categoriesData.map(item => {

                    return (
                        <FilterItem
                            listName={item.category}
                            onChangeHeandler={()=>{
                                props.filterProducts(productData, item.category)
                            }}
                        />

                    )
                })}

                <input type='text' placeholder="Minimal price" className='priceButton'/>
                <input type='text' placeholder="Maximum price" className='priceButton'/>
                <button type='confirm' className='checkButton'>Confirm your choice!</button>
            </form>
            <div className='clothes__list'>
                {productData.map(item => {
                    return (
                        <Link style={productStyles} to={'detail/' + `${item.id}`}>
                            <Product id={item.id} img={item.images} description={item.description}
                                     color={item.color} size={item.size}
                                     category={item.category} fit={item.fit} price={item.price}
                                     brand={item.brand}
                                     class_name='clothes__subclass'/>
                        </Link>
                    );
                })}</div>
            {/*<Price/>*/}
        </div>
    );
}
// const a = fetch("https://58e22bfd-5fc0-4bd8-87d1-44fd691df288.mock.pstmn.io/products").then(res => res.json());
// console.log(a);0
const mapStateToProps = store => {
    console.log('SLK store = ', store)

    return {
        filteredItems: store.basket.filteredItems
    }
};

export default connect(mapStateToProps, {filterProducts})(PagePLP);