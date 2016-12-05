import * as types from '../constants/actionTypes';

export function createPdp() {
  let newId = String(Math.random()).substr(2,8);
  return {
    type: types.CREATE_PDP,
    id: newId
  };
}