import { createStore } from "redux";
import React from "react";

const initialState = {
    name: "Jhon",
    secondName: "Smith"
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_NAME":
            return { ...state, name: action.payload };
            
        case "CHANGE_SECOND_NAME":
            return { ...state, secondName: action.payload };
    }
    return state;
}

const store = createStore(reducer)

console.log(store.getState());

const changeName = {
    type: "CHANGE_NAME",
    payload: "Ivan"
}

const changeSecondName = {
    type: "CHANGE_SECOND_NAME",
    payload: "Ivanov"
}

store.dispatch(changeName);
console.log(store.getState());

store.dispatch(changeSecondName);
console.log(store.getState());

export  const redax_ex = () => {
    return <></>;
}

export default redax_ex;