export function setItemsAction (items){
    return{
        type: "SET_ITEMS",
        payload: items
    }
}
export const filterProducts= (products, userFilter) => (dispatch)=>{
    return dispatch({
        type: "DO_FILTER_PRODUCTS",
        payload: {
            userFilter: userFilter,
            items: userFilter === ''
                ? products
                : products.filter(item => item.category === userFilter)
        }
    })
};