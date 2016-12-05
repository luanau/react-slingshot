import {CREATE_PDP} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import dateHelper from '../utils/dateHelper';


// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function pdpsReducer(state = initialState.pdps, action) {
  let dateNow;

  switch (action.type) {
    case CREATE_PDP:
    //Generate ids with String(Math.random()).substr(2,6)
    //Check membership with (stringArray.indexOf(searchStr) > -1)
    
      dateNow = dateHelper.getFormattedDateTime();

      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, {[action.id]: {id:action.id, dateCreated:dateNow, dateModified: dateNow}});

    // case CALCULATE_FUEL_SAVINGS:
    //   newState = objectAssign({}, state);
    //   newState[action.fieldName] = action.value;
    //   newState.necessaryDataIsProvidedToCalculateSavings = calculator().necessaryDataIsProvidedToCalculateSavings(newState);
    //   newState.dateModified = action.dateModified;

    //   if (newState.necessaryDataIsProvidedToCalculateSavings) {
    //     newState.savings = calculator().calculateSavings(newState);
    //   }

    //   return newState;

    default:
      return state;
  }
}
