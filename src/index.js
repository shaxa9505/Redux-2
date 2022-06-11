import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"

const initialState = {value: 0, name: "Shohrux", age: 19};

const reducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "INCREMENT" :
      return {
        ...state,
        value: state.value + 1
      }
    case "DECREMENT" :
      return {
        ...state,
        value: state.value - 1
      }
      case "RANDOM" :
        return {
          ...state,
          value: state.value = payload
        }
      default :
        return state
  }
}

const store = createStore(reducer);

const inc = () => {
  store.dispatch({type: "INCREMENT"})
}
const dec = () => {
  store.dispatch({type: "DECREMENT"})
}
const random = (number) => {
  store.dispatch({type: "RANDOM", payload: number})
}

  const update = () => document.getElementById("counter").textContent = store.getState().value

store.subscribe(update)

document.getElementById("increment").addEventListener("click", () => {
    inc()
})

document.getElementById("decrement").addEventListener("click", () => {
    dec()
})

document.getElementById("random").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  random(value)
})






ReactDOM.render(
  <React.StrictMode>
    <> 
    </>
  </React.StrictMode>,
  document.getElementById('root')
);


