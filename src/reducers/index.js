import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import pdps from './pdpsReducer';
import books from './booksReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  books,
  pdps,
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
