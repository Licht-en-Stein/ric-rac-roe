import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './components/Game';
import registerServiceWorker from './registerServiceWorker';


const init = (
  <div>
    <App />
    <Game />
  </div>
);


ReactDOM.render(init, document.getElementById('root'));
registerServiceWorker();