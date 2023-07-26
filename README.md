<h1>=> Create Your App</h1>

npx create-react-app redux-toolkit-tutorial

<h1>=> add 2 libraries into the project</h1>

npm install react-redux

npm install @reduxjs/toolkit

<h1>
In src make a new folder of redux

in that folder make a folder features and a file store.js

Go to store.js

</h1>

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
reducer: {
},
});

<h1>
now go to features and make a file counter.js
</h1>

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
value: 0,
};

export const counterSlice = createSlice({
name: "counter",
initialState,
reducers: {
increment: (state) => {
state.value = state.value + 1;
},
decrement: (state) => {
state.value -= 1;
},
reset: (state) => {
state.value = 0;
},
},
});

export const { increment, decrement, reset } = counterSlice.actions;

<h1>
Go to store.js
</h1>

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter";

export const store = configureStore({
reducer: {
counter: counterSlice.reducer,
},
});

<h1>
In the index.js wrap your app within provider
</h1>

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<Provider store={store}>
<App />
</Provider>
</React.StrictMode>
);

reportWebVitals();

<h1>
Clear App.js and write your ui like
</h1>

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/features/counter";

function App() {
const value = useSelector((store) => store.counter.value);
const dispatch = useDispatch();

return (
<>
please uncomment these 2 lines
<!-- <h1>Redux Toolkit</h1> -->
<div className="container">
<!-- <h1>{value}</h1> -->
<div className="btns">
<button
className="dec"
onClick={() => {
dispatch(decrement());
}} > -
</button>
<button
className="reset"
onClick={() => {
dispatch(reset());
}} >
[Reset]
</button>
<button
className="inc"
onClick={() => {
dispatch(increment());
}} > +
</button>
</div>
</div>
</>
);
}

export default App;

<h1>
In index.css clear everything and add
</h1>

- {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
  body {
  height: 100vh;
  background-color: #5F264A;
  display: grid;
  place-items: center;
  }
  .container {
  position: relative;
  width: 120vmin;
  background-color: #B0A4A4;
  padding: 100px 40px;
  border-radius: 9px;
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.2);
  }
  h1 {
  text-align: center;
  font-family: "Roboto Mono", monospace;
  font-size: 80px;
  color: #ffffff;
  }
  .btns {
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
  }
  .btns button {
  width: 130px;
  padding: 15px 0;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  }
  button.inc,
  button.dec {
  background-color: #5F264A;
  color: #ffffff;
  }
  button.reset {
  background-color: transparent;
  border: 4px solid #5F264A;
  color: #5F264A;
  }

  I hope this will help you in making your first redux - toolkit app
