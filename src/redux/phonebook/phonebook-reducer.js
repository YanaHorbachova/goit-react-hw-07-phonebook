import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import actionTypes from "./phonebook-types";
import actions from "./phonebook-actions";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [actions.filter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

///WITHOUT REDUX TOOLKIT
// import {combineReducers} from 'redux';
// import actionTypes from './phonebook-types'

// const items=(state=[], {type, payload}) => {
//   switch(type) {
// case actionTypes.ADD:
//   return [...state, payload];

//     case actionTypes.DELETE:
//   return state.filter(contact => contact.id !== payload);

//     default:
//     return state;

//   }

// }

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//       case actionTypes.FILTER:
//         return payload;

//       default:
//         return state;
//     }
// };

// export default combineReducers({
//     items,
//     filter
// })
