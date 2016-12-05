import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import pdps from './pdpsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  pdps,
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
