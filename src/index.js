import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fun from "./App"
// import el from "./App4";
// import Prop from "./App5";
// import {Childs} from "./App6";
// import Eight from "./App8";
import * as serviceWorker from './serviceWorker';




// ReactDOM.render(<Eight>This is what you came for</Eight>, document.getElementById("root"));

ReactDOM.render(<Fun />,document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
