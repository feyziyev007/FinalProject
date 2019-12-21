export const initialState={
    items: []
};
export function basketReducer(state=initialState, action) {
    switch (action.type) {
         case "SET_ITEMS":
            return {...state, items: action.payload};
        default:
            return state
    }
};
