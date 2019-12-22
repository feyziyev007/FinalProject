export const initialState={
    items: [],
    filteredItems:[],
    userFilter: ''
};
export function basketReducer(state = initialState, action) {
    switch (action.type) {
         case "SET_ITEMS":
            return {...state, items: action.payload};
        case "DO_FILTER_PRODUCTS":

            console.log('SLK action = ', action.payload);
            return {
                ...state,
                filteredItems: action.payload.items,
                userFilter: action.payload.userFilter};
        default:
            return state
    }
};
