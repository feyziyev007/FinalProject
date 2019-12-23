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
    console.log("productdatra",productData);
    async function getProduct() {
        const productUrl = "https://ibatech-ecommerce.herokuapp.com/api/products/all";
        const response = await fetch(productUrl);
        const data = await response.json();
        console.log("this is data",data.products);
        setProductData(data.products);
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
            </form>
            <div className='clothes__list'>
                {props.filteredItems.length? props.filteredItems.map(item => {
                        return(
                            <Link style={productStyles} to={'detail/' + `${item.id}`}>
                                <Product id={item.id} img={item.images[0]} description={item.description}
                                         color={item.color} size={item.size}
                                         category={item.category} fit={item.fit} price={item.price}
                                         brand={item.brand}
                                         class_name='clothes__subclass'/>
                            </Link>
                        )
                    })
                    :
                    productData.map(item => {
                        return (
                            <Link style={productStyles} to={'detail/' + `${item.id}`}>
                                <Product id={item.id} img={item.images[0]} description={item.description}
                                         color={item.color} size={item.size}
                                         category={item.category} fit={item.fit} price={item.price}
                                         brand={item.brand}
                                         class_name='clothes__subclass'/>
                            </Link>
                        );
                    })}</div>
        </div>
    );
}
const mapStateToProps = store => {
    console.log('SLK store = ', store)
    return {
        filteredItems: store.basket.filteredItems
    }
};
export default connect(mapStateToProps, {filterProducts})(PagePLP);