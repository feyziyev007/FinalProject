import { combineReducers } from 'redux';
import { basketReducer } from './basket';
import { categoryReducer } from './category';

export const rootReducer = combineReducers({
  basket: basketReducer,
  category: categoryReducer
});
