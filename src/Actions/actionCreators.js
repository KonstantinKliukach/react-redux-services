import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, CLEAR_FIELDS, EDIT_SERVICE, SET_SERVICE } from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function clearFields() {
  return {type: CLEAR_FIELDS}
}

export function editService(id, name, price) {
  return {type: EDIT_SERVICE, payload: {id, name, price}}
}

export function setChangedService(id, name, price) {
  return {type: SET_SERVICE, payload: {id, name, price}}
}