import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DrizzleProvider } from "drizzle-react";

// Import contract
import TutorialToken from "./contracts/TutorialToken.json";

console.log(TutorialToken);

const options = {
    web3: {
        block: false,
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:7545"
        }
    },
    contracts: [TutorialToken],
    events: {}
};

ReactDOM.render(
    <DrizzleProvider options={options}>
        <App />
    </DrizzleProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
